import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { User } from '../decorators/user.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('inside the guard');
        
        const request = context.switchToHttp().getRequest();
        return !!request.user; // Check if user is authenticated
    }
    
}
