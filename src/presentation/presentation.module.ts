import { Module } from "@nestjs/common";
import { TaskController } from "./controllers/task.controller";
import { UserController } from "./controllers/user.controller";
import { DomainModule } from "src/domain/domain.module";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";
import { AuthModule } from "src/auth/auth.module";
import { LoginUserUseCase } from "src/domain/usecases/user/implementation/login";
import { CreateTaskUseCase } from "src/domain/usecases/task/implementation/create";
import { DeleteTaskUseCase } from "src/domain/usecases/task/implementation/delete";
import { FindTaskUseCase } from "src/domain/usecases/task/implementation/find";
import { ShowTaskUseCase } from "src/domain/usecases/task/implementation/show";
import { UpdateTaskUseCase } from "src/domain/usecases/task/implementation/update";

@Module({
    imports: [DomainModule, AuthModule],
    controllers: [TaskController, UserController],
    providers: [CreateUserUseCase, LoginUserUseCase, CreateTaskUseCase, DeleteTaskUseCase, FindTaskUseCase, ShowTaskUseCase, UpdateTaskUseCase],
})
export class PresentationModule { }