

class TaskExampleUseCase {
    private static instance: TaskExampleUseCase;

    private constructor() {
        
    }

    public static getInstance(): TaskExampleUseCase {
        if (!TaskExampleUseCase.instance) {
            TaskExampleUseCase.instance = new TaskExampleUseCase();
        }

        return TaskExampleUseCase.instance;
    }

    getHello() {
        return "Hello World";
    }

}

const taskExampleUseCase: TaskExampleUseCase = TaskExampleUseCase.getInstance();

export {
    taskExampleUseCase
}
