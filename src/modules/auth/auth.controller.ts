import { Controller, Post, Body } from '@nestjs/common';
import { authenticatedUseCase } from '../../core/useCases/AuthenticatedUseCase';

@Controller('v1/auth')
export class AuthController {

    @Post('login')
    async login(@Body() body) {
        const response = await authenticatedUseCase.login(body);
        return response;
    }

    @Post('register')
    async register(@Body() body) {
        const response = await authenticatedUseCase.Register(body);
        return response;
    }

    @Post('verify-token')
    async verifyToken(@Body('token') token) {
        const response = await authenticatedUseCase.decodedToken(token);
        return response
    }
}   
