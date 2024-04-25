import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { registerUserDto } from 'src/auth/DTO/registerUser.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from 'src/auth/DTO/userLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenBlacklistService } from '../auth/tokenBlacklist.service';
import { UserEntity } from './user.entity';
import { Role } from 'src/enums/role.enum';


@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,
    private jwt: JwtService,
    private tokenBlacklistService: TokenBlacklistService){
    
}

    async registerUser(registerDTO: registerUserDto) {
    const {username, password,cin,firstname,lastname, email, imagePath} = registerDTO;
    const hashed = await bcrypt.hash(password, 12);
    const salt = await bcrypt.getSalt(hashed);

    const user = new UserEntity();
    user.cin=cin;
    user.firstName=firstname;
    user.lastName=lastname;
    user.email=email;
    user.imagePath=imagePath;

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
    const {username,email, password}= userLoginDTO;

    const user = await this.repo.findOne({
        where: {username,email},
    });

    if(!user) {
        throw new UnauthorizedException('invalid credentials');
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);  // 1234*5678*Aa
    if(isPasswordMatch){
        const jwtPayload = {username,role: user.role};
        const jwtToken = await this.jwt.signAsync(jwtPayload, {expiresIn: '1d', algorithm: 'HS512'});
        return {token: jwtToken};
        }
    else {
        throw new UnauthorizedException('Invalid credentials');
    }
    


}
async logout(token: string): Promise<void> {
    // Add the token to the blacklist upon logout
    this.tokenBlacklistService.addTokenToBlacklist(token);
}

async validateToken(token: string): Promise<boolean> {
    // Check if the token is blacklisted
    if (this.tokenBlacklistService.isTokenBlacklisted(token)) {
        throw new UnauthorizedException('Token has been invalidated');
    }

    // Validate the token
    try {
        await this.jwt.verifyAsync(token);
        return true;
    } catch (error) {
        throw new UnauthorizedException('Invalid token');
    }
}

}
