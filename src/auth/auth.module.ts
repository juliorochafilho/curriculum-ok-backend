import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
 
@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [AuthService, UsersService, LocalStrategy],
})
export class AuthModule {}
