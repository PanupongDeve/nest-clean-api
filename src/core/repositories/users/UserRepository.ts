import { User } from '../../entities/users/User';
import { usersMock } from '../../dataSource/mocks/usersMock';
import { DataSource } from '../../constant/Enum';

class UserRepository {
    public async getUsers({ dataSource }): Promise<User[]> {
        if (dataSource === DataSource.Mock) {
            const users = usersMock.getUsers();
            return users;
        }   
    }

    public async getUserById(id: string, { dataSource }): Promise<User> {
        if (dataSource === DataSource.Mock) { 
            const user: User = usersMock.getUserById(id);
            return user;
        }
    }


    public async createUser(user: any, { dataSource }): Promise<User[]> {
        if (dataSource === DataSource.Mock) {
            const users = usersMock.createUser(user);
            return users;
        }

        
    }

    public async updateByid(id: string, userData: any, { dataSource }): Promise<User[]>{
        if (dataSource === DataSource.Mock) {
            let usersUpdated = usersMock.updateByid(id, userData);
            return usersUpdated;
        }

        
    }

    public async deleteByid(id: string, { dataSource }): Promise<User[]> {
        if (dataSource === DataSource.Mock) {
            let userUpdated = usersMock.deleteByid(id);
            return userUpdated;
        }
        
    }
}



export {
    UserRepository
}