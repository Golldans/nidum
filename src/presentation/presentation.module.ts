import { Module } from "@nestjs/common";
import { TaskController } from "./controllers/task.controller";
import { UserController } from "./controllers/user.controller";
import { DomainModule } from "src/domain/domain.module";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";
import { AuthModule } from "src/auth/auth.module";
import { LoginUserUseCase } from "src/domain/usecases/user/implementation/login";

@Module({
    imports: [DomainModule, AuthModule],
    controllers: [TaskController, UserController],
    providers: [CreateUserUseCase, LoginUserUseCase],
})
export class PresentationModule {}