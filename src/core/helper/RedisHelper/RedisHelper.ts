import * as redis from 'redis';

import {
    REDIS_HOST,
    REDIS_PORT,
    REDIS_CACHED_ALIVE
} from '../../environments/environments';


export class RedisHelper {

    getClient() {
        return redis.createClient(REDIS_PORT, REDIS_HOST)
    }


    save(key, data) {
        const client = this.getClient();
        client.setex(key, REDIS_CACHED_ALIVE, JSON.stringify(data));
    }

    async get(key) {
        const responseData = new Promise((resolve, reject) => {
            const client = this.getClient();

            client.get(key, (err, data) => {
                if (err) {
                    reject(err);
                }

                if (data === null) {
                    resolve(null);
                } else {
                    resolve(JSON.parse(data));
                }  
            })
        })

        return await responseData;
    }
}