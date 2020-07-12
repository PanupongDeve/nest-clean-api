import { DtoAuthenticatedUser } from '../entities/users/DtoAuthenticatedUser';
import { JwtRepository } from '../repositories/authentication/JwtRepository';
import { JwtHelper } from '../helper/JwtHelper/JwtHelper';
import {
    HttpResponseError,
    HttpResponseSuccess
} from '../helper/HttpResponse/HttpResponse';

class AuthenticatedUseCase {
    jwtRepository: JwtRepository;
    jwtHelper: JwtHelper;
    private static instance: AuthenticatedUseCase;

    private constructor() {
        this.jwtRepository = new JwtRepository();
        this.jwtHelper = new JwtHelper();
    }

    public static getInstance(): AuthenticatedUseCase {
        if (!AuthenticatedUseCase.instance) {
            AuthenticatedUseCase.instance = new AuthenticatedUseCase();
        }

        return AuthenticatedUseCase.instance;
    }

    async login(data) {
        
        try {
            const user = new DtoAuthenticatedUser(data);
            const userAuthenticated = await this.jwtRepository.getUserByUsername(user.username);

            if ((user.username === userAuthenticated.username) && (user.password === userAuthenticated.password)) {
                const token = await this.jwtHelper.generateToken(userAuthenticated);
                const dataReponse = {
                    token
                }
                const response = new HttpResponseSuccess<any>(dataReponse);
            return response;
            } else {
                throw "Authenticated fail!";
            }    
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }
    }

    async Register() {

    }

    async verifyToken() {

    }
}

const authenticatedUseCase: AuthenticatedUseCase = AuthenticatedUseCase.getInstance();

export {
    authenticatedUseCase
}