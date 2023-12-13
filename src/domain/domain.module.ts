import { Module } from "@nestjs/common";
import { UserModule } from "./usecases/user/user.module";
import { DatabaseModule } from "src/infra/database/database.module";
import { TaskModule } from "./usecases/task/task.module";

@Module({
    imports: [UserModule, DatabaseModule, TaskModule],
    providers: [],
    exports: []
})
export class DomainModule {}