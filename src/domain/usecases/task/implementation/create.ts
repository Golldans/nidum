import { Injectable } from "@nestjs/common";
import { TaskEntity } from "src/infra/database/entities/task.entity";
import { TaskImpl } from "src/infra/database/implementation/task.impl";

@Injectable()
export class CreateTaskUseCase {
    constructor(
        private readonly taskImplementation: TaskImpl,
    ) {}

    async call(task_data: Partial<TaskEntity>): Promise<TaskEntity> {
        const task = await this.taskImplementation.create(task_data);
        return task;
    }
}