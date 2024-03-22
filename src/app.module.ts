import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Issat',
  autoLoadEntities: true,
  synchronize: false,
};
@Module({
  imports: [TypeOrmModule.forRoot(ormOptions),AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
