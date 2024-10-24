import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from '../auth/roles.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || '120104',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, RolesGuard],
  exports: [UsersService],
})
export class UsersModule {}
