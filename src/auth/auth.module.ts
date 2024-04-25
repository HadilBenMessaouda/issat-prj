import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtCustomStrategy } from '../strategy/jwt-custom.strategy';
import { RolesGuard } from 'src/guards/roles.guard';
import { TokenBlacklistService } from '../auth/tokenBlacklist.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserEntity } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: 'LOijtrkljdklsufidsui12jkj43k21l4',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d'
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
  ],
  providers: [AuthService,JwtCustomStrategy,RolesGuard,TokenBlacklistService],
  controllers: [AuthController],
  exports: [PassportModule,JwtCustomStrategy]
  
})
export class AuthModule {}
