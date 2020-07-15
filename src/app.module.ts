import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { TasksModule } from './modules/tasks/tasks.module';

import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [UsersModule, AuthModule, HealthCheckModule, ScheduleModule.forRoot(), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
