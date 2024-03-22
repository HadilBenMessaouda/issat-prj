import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerUserDto } from 'src/DTO/registerUser.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from 'src/DTO/userLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,
    private jwt: JwtService){
    
}
    async registerUser(registerDTO: registerUserDto) {
    const {username, password} = registerDTO;
    const hashed = await bcrypt.hash(password, 12);
    const salt = await bcrypt.getSalt(hashed);

    const user = new UserEntity();
    user.username = username;
    user.password = hashed;
    user.salt = salt;

    this.repo.create(user);
    try {
        return await this.repo.save(user);

    } catch (err) {
        throw new InternalServerErrorException('something went wrong, user not created.');
        
    }
}

async loginUser(userLoginDTO: UserLoginDto) {
    const {username, password}= userLoginDTO;

    const user = await this.repo.findOne({
        where: {username,},
    });

    if(!user) {
        throw new UnauthorizedException('invalid credentials');
    }
    const salt = user.salt;
    const isPasswordMatch = await bcrypt.compare(password, user.password);  // 1234*5678*Aa
    if(isPasswordMatch){
        const jwtPayload = {username};
        const jwtToken = await this.jwt.signAsync(jwtPayload, {expiresIn: '1d', algorithm: 'HS512'});
        return {token: jwtToken};
        }
    else {
        throw new UnauthorizedException('Invalid credentials');
    }
    


}

}
