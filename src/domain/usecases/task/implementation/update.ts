import { Injectable } from "@nestjs/common";
import { TaskEntity } from "src/infra/entities/task.entity";
import { TaskImpl } from "src/infra/implementation/task.impl";

@Injectable()
export class UpdateTaskUseCase {
    constructor(private readonly taskImplementation: TaskImpl) {}

    async call(criteria: Partial<TaskEntity>, task_data: Partial<TaskEntity>): Promise<TaskEntity> {
        const task = await this.taskImplementation.update(criteria, task_data);
        return task;
    }
}