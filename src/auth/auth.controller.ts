import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { registerUserDto } from 'src/auth/DTO/registerUser.dto';
import { UserLoginDto } from 'src/auth/DTO/userLogin.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { AuthService } from './auth.service';


//http://localhost:3000/api/auth

@Controller('auth')

export class AuthController {


    constructor(private authService: AuthService){

    }
    @Post('register')
    registration(@Body(ValidationPipe) regDto: registerUserDto) {
        return this.authService.registerUser(regDto);

    }
    @Post('login')
    signin(@Body(ValidationPipe) loginDTO: UserLoginDto){
        return this.authService.loginUser(loginDTO);
    }

    @Post('logout')
    async logout(@Body('token') token: string) {
        await this.authService.logout(token);
        return { message: 'Logout successful' };
    }

    
}
