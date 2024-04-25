import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/auth/user.entity';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { studentEntity } from 'src/student/entities/student.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    if (!roles) {
      return true;
    }

    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () =>
      !!user.roles.find(role => !!roles.find(item => item === role));

    return user && user.roles && hasRole();
  }
}