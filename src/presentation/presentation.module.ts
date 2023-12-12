import { Module } from "@nestjs/common";
import { TaskController } from "./controllers/task.controller";

@Module({
    imports: [],
    controllers: [TaskController],
    providers: [],
})
export class PresentationModule {}