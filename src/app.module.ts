import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
@Module({
  imports: [UsersModule, AuthModule, HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
