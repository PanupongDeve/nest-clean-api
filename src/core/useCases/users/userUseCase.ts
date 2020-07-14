import { User } from '../../entities/users/User';
import { UserRepository } from '../../repositories/users/UserRepository';
import {
    HttpResponse,
    HttpResponseError,
    HttpResponseSuccess
} from '../../helper/HttpResponse/HttpResponse';
import { DataSource } from '../../constant/Enum';

class UserUseCase {
    userRepository: UserRepository;
    private static instance: UserUseCase;

    private constructor() {
        this.userRepository = new UserRepository();
    }

    public static getInstance(): UserUseCase {
        if (!UserUseCase.instance) {
            UserUseCase.instance = new UserUseCase();
        }

        return UserUseCase.instance;
    }


    public async createUser(user: any): Promise<HttpResponse<User[]>> {
        try {
            const users: User[] = await this.userRepository.createUser(user, { dataSource: DataSource.Mock })
            const response = new HttpResponseSuccess<User[]>(users);
            return response;
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }

        
        
    }

    public async updateUser(id: string, user: any): Promise<HttpResponse<string>> {
        try {
            await this.userRepository.updateByid(id, user, { dataSource: DataSource.Mock });
            const response = new HttpResponseSuccess<string>(`updated at id:${id} successful!`);
            return response;
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }
    }

    public async deleteUser(id: string): Promise<HttpResponse<string>> {
        try {
            await this.userRepository.deleteByid(id, { dataSource: DataSource.Mock });
            const response = new HttpResponseSuccess<string>(`deleted at id:${id} successful!`);
            return response;
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }
    }

    public async getUsers(): Promise<HttpResponse<User[]>> {
        try {
            const users: User[] = await this.userRepository.getUsers({ dataSource: DataSource.Mock });
            const response = new HttpResponseSuccess<User[]>(users);
            return response;
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }

        
    }

    public async getUserById(id: string): Promise<HttpResponse<User>> {
        try {
            const user: User = await this.userRepository.getUserById(id, { dataSource: DataSource.Mock });
            const response = new HttpResponseSuccess<User>(user);
            return response;
        } catch (error) {
            
        }

        
    }
}

const userUseCase: UserUseCase = UserUseCase.getInstance();

export {
    userUseCase
}