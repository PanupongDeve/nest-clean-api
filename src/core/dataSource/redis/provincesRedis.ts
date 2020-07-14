import { RedisHelper } from '../../helper/RedisHelper/RedisHelper';


class ProvincesRedis {
    private static instance: ProvincesRedis;
    private redisHelper: RedisHelper;
    private key:string = 'provices';

    private constructor() {
        this.redisHelper = new RedisHelper();
    }

    public static getInstance(): ProvincesRedis {
        if (!ProvincesRedis.instance) {
            ProvincesRedis.instance = new ProvincesRedis();
        }

        return ProvincesRedis.instance;
    }

    async getProvinces() {
        return await this.redisHelper.get(this.key);
    }

    async saveProvices(data) {
        this.redisHelper.save(this.key, data);
    }
}

const provincesRedis: ProvincesRedis = ProvincesRedis.getInstance();

export { provincesRedis }