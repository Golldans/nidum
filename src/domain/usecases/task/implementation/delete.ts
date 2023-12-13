import { Injectable } from "@nestjs/common";
import { TaskImpl } from "src/infra/database/implementation/task.impl";

@Injectable()
export class DeleteTaskUseCase {
    constructor(private readonly taskImplementation: TaskImpl) {}

    async call(task_id: number, user_id: number): Promise<void> {
        const task = await this.taskImplementation.delete({ id: task_id });
        return task;
    }
}