import { DtoAuthenticatedUser } from '../entities/users/DtoAuthenticatedUser';
import { DtoRegisteredUser } from '../entities/users/DtoRegisteredUser';
import { DtoForUserSaveToken } from '../entities/users/DtoForUserSaveToken';
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
                const userSaveToken = new DtoForUserSaveToken(userAuthenticated);
                const token = await this.jwtHelper.generateToken(userSaveToken);
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

    async Register(data) {
        try {
            const user = new DtoRegisteredUser(data);
            if (user.password === user.passwordConfirm) {
                const userForSaveDataSource = new DtoAuthenticatedUser(user);
                const userRegistered = await this.jwtRepository.saveUserRegisterd(userForSaveDataSource);
                const userSaveToken = new DtoForUserSaveToken(userRegistered);
                const token = await this.jwtHelper.generateToken(userSaveToken);
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

    async decodedToken(token) {
        try {
            const decodedToken = await this.jwtHelper.decodedToken(token);
            return decodedToken;
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }
    }
}

const authenticatedUseCase: AuthenticatedUseCase = AuthenticatedUseCase.getInstance();

export {
    authenticatedUseCase
}