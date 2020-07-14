import { DataSource } from '../../constant/Enum';
import { authenticatedUserMock } from '../../dataSource/mocks/AuthenticatedUserMock';
import { DtoAuthenticatedUser } from '../../entities/users/DtoAuthenticatedUser';

export class JwtRepository {
    
    async getUserByUsername(username: string, { dataSource })  {
        if (dataSource === DataSource.Mock) {
            const authenticatedUser = new DtoAuthenticatedUser(authenticatedUserMock);
            return authenticatedUser;
        } 
    }


    async saveUserRegisterd(user, { dataSource }) {
        if (dataSource === DataSource.Mock) {
            return user;
        } 
    }
}