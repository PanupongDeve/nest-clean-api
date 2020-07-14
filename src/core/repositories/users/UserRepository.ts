import { User } from '../../entities/users/User';
import { usersMock } from '../../dataSource/mocks/usersMock';
import { DataSource } from '../../constant/Enum';
import { utils } from '../../utils';

class UserRepository {
    public async getUsers(): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const users = usersMock.getUsers();
            return users;
        }   
    }

    public async getUserById(id: string): Promise<User> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) { 
            const user: User = usersMock.getUserById(id);
            return user;
        }
    }


    public async createUser(user: any): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const users = usersMock.createUser(user);
            return users;
        }

        
    }

    public async updateByid(id: string, userData: any): Promise<User[]>{
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            let usersUpdated = usersMock.updateByid(id, userData);
            return usersUpdated;
        }

        
    }

    public async deleteByid(id: string): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;
        
        if (dataSourceSelected === DataSource.Mock) {
            let userUpdated = usersMock.deleteByid(id);
            return userUpdated;
        }
        
    }
}



export {
    UserRepository
}