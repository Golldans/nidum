import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { decode } from "punycode";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateTaskUseCase } from "src/domain/usecases/task/implementation/create";
import { DeleteTaskUseCase } from "src/domain/usecases/task/implementation/delete";
import { FindTaskUseCase } from "src/domain/usecases/task/implementation/find";
import { ShowTaskUseCase } from "src/domain/usecases/task/implementation/show";
import { UpdateTaskUseCase } from "src/domain/usecases/task/implementation/update";
import { CreateTaskDto } from "./dto/task/create.dto";
import { ApiConsumes, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateTaskDto } from "./dto/task/update.dto";
import { IDecodedJwt } from "./dto/jwt/decoded.dto";
import { TaskEntity } from "src/infra/database/entities/task.entity";

@ApiTags('tasks')
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
    @ApiConsumes('application/json')
    @ApiResponse({ status: 201, description: 'Task created' })
    @ApiResponse({ status: 401, description: 'An inalid json was provided' })
    @ApiResponse({ status: 400, description: 'Invalid data provided as body' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async store(@Request() req:Request, @Body() body: CreateTaskDto): Promise<TaskEntity> {
        const decoded_jwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);

        const task_payload = {
            ...body,
            id_user: decoded_jwt.id_user,
        }

        const task = this.createTaskUseCase.call(task_payload);
        return task;
    }

    @Put("/update/:id")
    @ApiParam({
        name: 'id',
        type: 'number'
    })
    @ApiConsumes('application/json')
    @ApiResponse({ status: 201, description: 'Task updated' })
    @ApiResponse({ status: 401, description: 'An inalid json was provided' })
    @ApiResponse({ status: 403, description: 'The request was valid, but this specific task does not belong to the user' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async update(@Request() req: Request, @Body() body: UpdateTaskDto, @Param() raw_id: { id: number }): Promise<TaskEntity> {
        const decoded_jwt: IDecodedJwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);
        const updated_task = this.updateTaskUseCase.call({ id: raw_id.id, id_user: decoded_jwt.id_user }, body);
        return updated_task;
    }

    @Get("/list")
    @ApiResponse({ status: 200, description: 'Sucessfully listed all tasks' })
    @ApiResponse({ status: 401, description: 'An inalid json was provided' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async list(@Request() req: Request): Promise<TaskEntity[]> {
        const tasks = await this.findTaskUseCase.call();
        return tasks;
    }

    @Get("/show/:id")
    @ApiParam({
        name: 'id',
        type: 'number'
    })
    @ApiResponse({ status: 200, description: 'Sucessfully listed a single or less tasks' })
    @ApiResponse({ status: 401, description: 'An inalid json was provided' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async show(@Param() raw_id: { id: number }): Promise<TaskEntity> {
        const id = raw_id.id;
        const task = await this.showTaskUseCase.call(id);
        return task;
    }

    @Delete("/delete/:id")
    @ApiParam({
        name: 'id',
        type: 'number'
    })
    @ApiResponse({ status: 200, description: 'Sucessfully deleted a task' })
    @ApiResponse({ status: 401, description: 'An inalid json was provided' })
    @ApiResponse({ status: 403, description: 'The request was valid, but this specific task does not belong to the user' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async delete(@Request() req:Request, @Param() raw_id: { id: number; }): Promise<void> {
        const decoded_jwt: IDecodedJwt = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);
        const deleted_task = await this.deleteTaskUseCase.call(raw_id.id, decoded_jwt.id_user);
        return deleted_task;
    }
}