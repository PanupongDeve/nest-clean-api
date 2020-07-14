import { DataSource } from '../../constant/Enum';
import { provinces } from '../../dataSource/mocks/provincesMock';


class ProvincesRepository {
    public async getProvinces(): Promise<any> {
        const dataSourceSelected = DataSource.Mock;

        if (dataSourceSelected === DataSource.Mock) {
            return provinces;
        }   
    }

}


export {
    ProvincesRepository
}