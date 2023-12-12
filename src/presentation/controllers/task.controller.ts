import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTaskUseCase } from "src/domain/usecases/task/implementation/create";
import { DeleteTaskUseCase } from "src/domain/usecases/task/implementation/delete";
import { FindTaskUseCase } from "src/domain/usecases/task/implementation/find";
import { ShowTaskUseCase } from "src/domain/usecases/task/implementation/show";
import { UpdateTaskUseCase } from "src/domain/usecases/task/implementation/update";

@Controller("task")
export class TaskController {

    constructor(private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly deleteTaskUseCase: DeleteTaskUseCase,
        private readonly findTaskUseCase: FindTaskUseCase,
        private readonly showTaskUseCase: ShowTaskUseCase,
        private readonly updateTaskUseCase: UpdateTaskUseCase
    ) { }

    @Post("/store")
    async store(@Body() body: any): Promise<any> {
        const task = this.createTaskUseCase.call(body);
        return task;
    }

    @Put("/update")
    async update(@Body() body: any): Promise<any> {
        const id_task = body.id;
        const updated_task = this.updateTaskUseCase.call(id_task, body);
        return updated_task;
    }

    @Get("/list")
    async list(): Promise<any> {
        const tasks = await this.findTaskUseCase.call();
        return tasks;
    }

    @Get("/show/:id")
    async show(@Param() id: number): Promise<any> {
        const task = await this.showTaskUseCase.call(id);
        return task;
    }

    @Delete("/delete/:id")
    async delete(@Param() id: number): Promise<any> {
        const deleted_task = await this.deleteTaskUseCase.call(id, 1);
        return deleted_task;
    }
}