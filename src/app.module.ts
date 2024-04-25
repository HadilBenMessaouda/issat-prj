import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { StudentController } from './student/student.controller';
import { GroupsModule } from './groups/groups.module';
import { studentEntity } from './student/entities/student.entity';
import { Group } from './groups/entities/group.entity';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './auth/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { ClassesModule } from './classes/classes.module';
import { classEntity } from './classes/entities/class.entity';
import { FiliereModule } from './filiere/filiere.module';
import { DepartmentModule } from './department/department.module';
import { ProfsModule } from './profs/profs.module';
import { MatieresModule } from './matieres/matieres.module';
import { SeancesModule } from './seances/seances.module';
import { NewsModule } from './news/news.module';
import { EmploiModule } from './emploi/emploi.module';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    
    TypeOrmModule.forFeature([UserEntity,studentEntity, Group,classEntity]),
    AuthModule, StudentModule,GroupsModule, ClassesModule, FiliereModule, DepartmentModule, ProfsModule, MatieresModule, SeancesModule, NewsModule, EmploiModule ],
    
  controllers: [AppController,StudentController],
  providers: [AppService, StudentService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard, // Add JwtAuthGuard as global guard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard, // Add RolesGuard as global guard
    },],
})
export class AppModule {}
