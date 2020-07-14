import { DataSource } from '../../constant/Enum';
import { provinces } from '../../dataSource/mocks/provincesMock';
import { provincesRedis } from '../../dataSource/redis/provincesRedis';


class ProvincesRepository {
    public async getProvinces({ dataSource }): Promise<any> {
        if (dataSource === DataSource.Mock) {
            return provinces;
        } else if (dataSource === DataSource.REDIS) {
            return await provincesRedis.getProvinces();
        } 
    }


    public async saveProvinces(data, { dataSource }) {
        if (dataSource === DataSource.REDIS) {
            await provincesRedis.saveProvices(data);
        }
    }
}


export {
    ProvincesRepository
}