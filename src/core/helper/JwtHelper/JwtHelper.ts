import * as jwt from 'jsonwebtoken';

export class JwtHelper {
    async generateToken(data) {
        try {
            const token = jwt.sign({data}, 'my-secret');
            return token;
        } catch (error) {
            throw error;
        }
    }

    async verifyToken() {
        
    }
}


