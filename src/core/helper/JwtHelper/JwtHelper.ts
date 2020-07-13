import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../constant/jwt-secret-key';
export class JwtHelper {

    constructor() {

    }

    async generateToken(data) {
        try {
            const token = jwt.sign({data}, JWT_SECRET_KEY);
            return token;
        } catch (error) {
            throw error;
        }
    }

    async decodedToken(token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET_KEY);
            return decoded;
        } catch (error) {
            throw error;
        }
    }
}


