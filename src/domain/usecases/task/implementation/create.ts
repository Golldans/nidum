import { Injectable } from "@nestjs/common";
import { TaskImpl } from "src/infra/database/implementation/task.impl";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        private readonly taskImplementation: TaskImpl,
    ) {}

    async call(task_data: any): Promise<any> {
        const task = await this.taskImplementation.create(task_data);
        return task;
    }
}