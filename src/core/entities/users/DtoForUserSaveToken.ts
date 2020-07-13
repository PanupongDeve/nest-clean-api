
export class DtoForUserSaveToken {
    username: string;

    constructor(user: DtoForUserSaveToken) {
        this.username = user.username;
    }
}