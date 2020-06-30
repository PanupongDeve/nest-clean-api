class User {
    id: string;
    firstName: string;
    lastName: string;

    constructor(user: User) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.id = user.id;
    }

}


export {
    User
}