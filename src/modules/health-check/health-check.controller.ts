import { Controller, Get } from '@nestjs/common';
import { healthCheckUseCase } from '../../core/useCases/healthCheckUseCase';
import { HttpResponse } from '../../core/helper/HttpResponse/HttpResponse';

@Controller('v1/health-check')
export class HealthCheckController {
    
  @Get()
  async getUsers(): Promise<HttpResponse<any>> {
    const response = await healthCheckUseCase.getProvinces();
    return response;
  }
}
