

export class DtoAuthenticatedUser {
    username: string;
    password: string;

    constructor(user: DtoAuthenticatedUser) {
        this.username = user.username;
        this.password = user.password;
    }
}