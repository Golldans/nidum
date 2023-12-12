import { Injectable } from "@nestjs/common";
import { TaskImpl } from "src/infra/database/implementation/task.impl";

@Injectable()
export class ShowTaskUseCase {
    constructor(private readonly taskImplementation: TaskImpl) {}

    async call(task_id: number): Promise<any> {
        const task = await this.taskImplementation.findOne(task_id);
        return task;
    }
}