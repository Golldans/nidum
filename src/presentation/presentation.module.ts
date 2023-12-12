import { Module } from "@nestjs/common";
import { TaskController } from "./controllers/task.controller";
import { UserController } from "./controllers/user.controller";
import { DomainModule } from "src/domain/domain.module";
import { CreateUserUseCase } from "src/domain/usecases/user/create";

@Module({
    imports: [DomainModule],
    controllers: [TaskController, UserController],
    providers: [CreateUserUseCase],
})
export class PresentationModule {}