import { Injectable } from "@nestjs/common";
import { TaskEntity } from "src/infra/database/entities/task.entity";
import { TaskImpl } from "src/infra/database/implementation/task.impl";

@Injectable()
export class FindTaskUseCase {
    constructor(private readonly taskImplementation: TaskImpl) {}

    async call(): Promise<TaskEntity[]> {
        const tasks = await this.taskImplementation.findAll();
        return tasks;
    }
}