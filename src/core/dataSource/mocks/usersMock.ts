import { User } from '../../entities/users/User';
import { utils } from '../../utils';


class UsersMock {
    private users: Array<any> = [
        { id: 0, firstName: 'John', lastName: 'Dohn' },
        { id: 1, firstName: 'Jessica', lastName: 'Bob' }
    ];

    private static instance: UsersMock;

    private constructor() {
   
    }

    public static getInstance(): UsersMock {
        if (!UsersMock.instance) {
            UsersMock.instance = new UsersMock();
        }

        return UsersMock.instance;
    }


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

    getUsers() {
        const usersReponse = this.users.filter(user => user !== null)
        return usersReponse;
    }

    getUserById(id: string): User {
        const users: User[] =  this.mappingFromDataSourceToUsers(this.users);
        const user: User = this.filterUsersById(id, users);
        return user;
    }

    createUser(user: any): User[] {
        user.id = utils.generateIdFromArray(this.users);
        const userMapped: User = new User(user);
        this.users.push(userMapped)
        const users = this.getUsers();
        return users;
    }

    updateByid(id: string, userData: any): User[] {
        const userMapped: User = new User(userData);
        const users: User[] =  this.mappingFromDataSourceToUsers(this.users);

        let usersUpdated: User[] = users.map((user) => {
            if (Number(user.id) === Number(id)) {
                const indexId = Number(id);
                let userUpdated:User = this.updateUserMockAttribute(users[indexId], userMapped);
                this.users[indexId] = userUpdated;
                return userUpdated;
            } else {
                return user;
            }
        })

        return usersUpdated;
    }

    deleteByid(id: string): User[] {
        const users: User[] =  this.mappingFromDataSourceToUsers(this.users);
        let userUpdated: User[] = users.map((user) => {
            if (Number(user.id) === Number(id)) {
                const indexId = Number(id);
                this.users[indexId] = null;
                user = null;
                return user;
            } else {
                return user;
            }
        });

        return userUpdated;
    }
}

const usersMock: UsersMock = UsersMock.getInstance();

export { usersMock }