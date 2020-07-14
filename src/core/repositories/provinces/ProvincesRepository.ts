import { DataSource } from '../../constant/Enum';
import { provinces } from '../../dataSource/mocks/provincesMock';


class ProvincesRepository {
    public async getProvinces({ dataSource }): Promise<any> {
        if (dataSource === DataSource.Mock) {
            return provinces;
        }   
    }

}


export {
    ProvincesRepository
}