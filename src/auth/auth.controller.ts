import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerUserDto } from 'src/DTO/registerUser.dto';
import { UserLoginDto } from 'src/DTO/userLogin.dto';
import { JwtAuthGuard } from './jwt-auth.guard';


//http://localhost:3000/api/auth
@Controller('auth')
export class AuthController {


    constructor(private authService: AuthService){

    }
    @UseGuards(JwtAuthGuard)
    @Post('register')
    registration(@Body(ValidationPipe) regDto: registerUserDto) {
        return this.authService.registerUser(regDto);

    }
    @UseGuards(JwtAuthGuard)
    @Post('login')
    signin(@Body(ValidationPipe) loginDTO: UserLoginDto){
        return this.authService.loginUser(loginDTO);
    }
    
}
