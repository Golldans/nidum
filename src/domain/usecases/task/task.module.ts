import { Module } from "@nestjs/common";
import { CreateTaskUseCase } from "./implementation/create";
import { DeleteTaskUseCase } from "./implementation/delete";
import { FindTaskUseCase } from "./implementation/find";
import { ShowTaskUseCase } from "./implementation/show";
import { UpdateTaskUseCase } from "./implementation/update";

@Module({
    providers: [CreateTaskUseCase, DeleteTaskUseCase, FindTaskUseCase, ShowTaskUseCase, UpdateTaskUseCase],
    exports: [CreateTaskUseCase, DeleteTaskUseCase, FindTaskUseCase, ShowTaskUseCase, UpdateTaskUseCase]
})
export class TaskModule {}