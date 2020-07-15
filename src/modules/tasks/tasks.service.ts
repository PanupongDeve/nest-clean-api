import { Injectable, Logger  } from '@nestjs/common';
import { Cron  } from '@nestjs/schedule';

import { taskExampleUseCase } from '../../core/useCases/TaskExampleUseCase';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    @Cron('*/3 * * * * *')
    handleCron() {
      this.logger.debug(`System say: ${ taskExampleUseCase.getHello() }`);
    }
}
