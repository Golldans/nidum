import { Module } from "@nestjs/common";
import { UserModule } from "./usecases/user/user.module";
import { DatabaseModule } from "src/infra/database.module";

@Module({
    imports: [UserModule, DatabaseModule],
    providers: [],
    exports: []
})
export class DomainModule {}