import { User } from '../../entities/users/User';
import { usersMock } from '../../services/mocks/usersMock';
import { DataSource } from '../../constant/Enum';
import { utils } from '../../utils';

class UserRepository {

    private mappingFromDataSourceToUsers(users: any[]): User[] {
        const filteredUsers = users.filter((user) => user !== null);

        const mappedUsers: User[] = filteredUsers.map((user) => {
            return new User(user);
        });

        return mappedUsers;
    }


    private filterUsersById(id: string, users: User[]): User {
        const user: User = users.filter((item) => Number(item.id) === Number(id))[0];

        return user;
    }

    private updateUserMockAttribute(user: User, userUpdated: User): User {
        user.firstName = userUpdated.firstName ? userUpdated.firstName : user.firstName;
        user.lastName = userUpdated.lastName ? userUpdated.lastName: user.lastName;

        return user;
    }

    public async getUsers(): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const users = this.mappingFromDataSourceToUsers(usersMock)
            return users;
        }   
    }

    public async getUserById(id: string): Promise<User> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);
            const user: User = this.filterUsersById(id, users);

            return user;
        }
    }


    public async createUser(user: any): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            user.id = utils.generateIdFromArray(usersMock);
            const userMapped: User = new User(user);
            usersMock.push(userMapped);
            const users = this.getUsers();
            return users;
        }

        
    }

    public async updateByid(id: string, userData: any): Promise<User[]>{
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            const userMapped: User = new User(userData);
            const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);

            let usersUpdated: User[] = users.map((user) => {
                if (Number(user.id) === Number(id)) {
                    const indexId = Number(id);
                    let userUpdated:User = this.updateUserMockAttribute(users[indexId], userMapped);
                    usersMock[indexId] = userUpdated;
                    return userUpdated;
                } else {
                    return user;
                }
            })

            return usersUpdated;
        }

        
    }

    public async deleteByid(id: string): Promise<User[]> {
        const dataSourceSelected = DataSource.Mock;
        
        if (dataSourceSelected === DataSource.Mock) {
            const users: User[] =  this.mappingFromDataSourceToUsers(usersMock);
            let userUpdated: User[] = users.map((user) => {
                if (Number(user.id) === Number(id)) {
                    const indexId = Number(id);
                    usersMock[indexId] = null;
                    user = null;
                    return user;
                } else {
                    return user;
                }
            });

            return userUpdated;
        }
        
    }
}



export {
    UserRepository
}