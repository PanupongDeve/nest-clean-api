import { ProvincesRepository } from '../repositories/provinces/ProvincesRepository';
import {
    HttpResponseError,
    HttpResponseSuccess
} from '../helper/HttpResponse/HttpResponse';
import { DataSource } from '../constant/Enum';

class HealthCheckUseCase {
    private static instance: HealthCheckUseCase;
    private provincesRepository:ProvincesRepository;

    private constructor() {
        this.provincesRepository = new ProvincesRepository();
    }

    public static getInstance(): HealthCheckUseCase {
        if (!HealthCheckUseCase.instance) {
            HealthCheckUseCase.instance = new HealthCheckUseCase();
        }

        return HealthCheckUseCase.instance;
    }

    async getProvinces() {
        try {
            const provincesFromCache = await this.provincesRepository.getProvinces({ dataSource: DataSource.REDIS });

            if (provincesFromCache !== null) {
                const responseFromCache = new HttpResponseSuccess<any>(provincesFromCache);
                return responseFromCache;
            } else {
                const provices = await this.provincesRepository.getProvinces({ dataSource: DataSource.Mock });
                await this.provincesRepository.saveProvinces(provices, { dataSource: DataSource.REDIS });
                const response = new HttpResponseSuccess<any>(provices);
                return response;
            }

            
            
        } catch (error) {
            const responseErr = new HttpResponseError<any>(error);
            return responseErr;
        }

        return ;
    }
}


const healthCheckUseCase: HealthCheckUseCase = HealthCheckUseCase.getInstance();

export {
    healthCheckUseCase
}



