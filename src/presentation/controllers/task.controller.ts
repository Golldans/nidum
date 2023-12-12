import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { decode } from "punycode";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateTaskUseCase } from "src/domain/usecases/task/implementation/create";
import { DeleteTaskUseCase } from "src/domain/usecases/task/implementation/delete";
import { FindTaskUseCase } from "src/domain/usecases/task/implementation/find";
import { ShowTaskUseCase } from "src/domain/usecases/task/implementation/show";
import { UpdateTaskUseCase } from "src/domain/usecases/task/implementation/update";

export interface IDecodedJwt {
    id_user: number;
    username: string;
}

@Controller("task")
export class TaskController {
    constructor(private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly deleteTaskUseCase: DeleteTaskUseCase,
        private readonly findTaskUseCase: FindTaskUseCase,
        private readonly showTaskUseCase: ShowTaskUseCase,
        private readonly updateTaskUseCase: UpdateTaskUseCase,
        private readonly jwtService: JwtService,
    ) { }

    @Post("/store")
    @UseGuards(JwtAuthGuard)
    async store(@Request() req:Request, @Body() body: any): Promise<any> {
        const decoded_jwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);

        const task_payload = {
            ...body,
            id_user: decoded_jwt.id_user,
        }

        const task = this.createTaskUseCase.call(task_payload);
        return task;
    }

    @Put("/update/:id")
    @UseGuards(JwtAuthGuard)
    async update(@Request() req: Request, @Body() body: any, @Param() raw_id: { id: number }): Promise<any> {
        const decoded_jwt: IDecodedJwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);
        const updated_task = this.updateTaskUseCase.call({ id: raw_id.id, id_user: decoded_jwt.id_user }, body);
        return updated_task;
    }

    @Get("/list")
    @UseGuards(JwtAuthGuard)
    async list(@Request() req: Request): Promise<any> {
        const tasks = await this.findTaskUseCase.call();
        return tasks;
    }

    @Get("/show/:id")
    @UseGuards(JwtAuthGuard)
    async show(@Param() raw_id: { id: number }): Promise<any> {
        const id = raw_id.id;
        const task = await this.showTaskUseCase.call(id);
        return task;
    }

    @Delete("/delete/:id")
    @UseGuards(JwtAuthGuard)
    async delete(@Request() req:Request, @Param() raw_id: { id: number; }): Promise<any> {
        const decoded_jwt: IDecodedJwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);
        const deleted_task = await this.deleteTaskUseCase.call(raw_id.id, decoded_jwt.id_user);
        return deleted_task;
    }
}