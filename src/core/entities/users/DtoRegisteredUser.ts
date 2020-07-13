

export class DtoRegisteredUser {
    username: string;
    password: string;
    passwordConfirm: string;

    constructor(user: DtoRegisteredUser) {
        this.username = user.username;
        this.password = user.password;
        this.passwordConfirm = user.passwordConfirm;
    }
}