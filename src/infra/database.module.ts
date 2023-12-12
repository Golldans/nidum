import { Global, Module } from "@nestjs/common";
import { DataSourcesModule } from "src/shared/connections/connections.module";
import { PostgresProviders } from "./providers/postgre.provider";
import { UserImpl } from "./implementation/user.impl";
import { TaskImpl } from "./implementation/task.impl";

@Global()
@Module({
    imports: [DataSourcesModule],
    providers: [...PostgresProviders, UserImpl, TaskImpl],
    exports: [UserImpl, TaskImpl]
})
export class DatabaseModule {}