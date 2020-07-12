import { DataSource } from '../../constant/Enum';
import { authenticatedUserMock } from '../../dataSource/mocks/AuthenticatedUserMock';
import { DtoAuthenticatedUser } from '../../entities/users/DtoAuthenticatedUser';

export class JwtRepository {
    
    async getUserByUsername(username: string)  {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const authenticatedUser = new DtoAuthenticatedUser(authenticatedUserMock);
            return authenticatedUser;
        } 
    }
}