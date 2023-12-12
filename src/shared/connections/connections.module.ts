import { Module } from "@nestjs/common";
import { databaseProviders } from "./connections.config";

@Module({
    providers: [databaseProviders],
    exports: [databaseProviders],
})
export class DataSourcesModule {}