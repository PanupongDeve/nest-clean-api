import { Controller, Post, Body } from '@nestjs/common';
import { authenticatedUseCase } from '../../core/useCases/AuthenticatedUseCase';

@Controller('v1/auth')
export class AuthController {

    @Post('login')
    async login(@Body() body) {
        const response = await authenticatedUseCase.login(body);
        return response;
    }
}   
