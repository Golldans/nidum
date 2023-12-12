import { ConfigService } from "@nestjs/config";
import { SYSTEM_DATASOURCES } from "../constants/orm";
import { DataSource } from "typeorm";

export const databaseProviders = {
    provide: SYSTEM_DATASOURCES.POSTGRES_DATASOURCE,
    useFactory: async(configService: ConfigService) => {
        const PostgresDataSource = new DataSource({
            type: 'postgres',
            host: configService.getOrThrow<string>('PG_HOST'),
            port: configService.getOrThrow<number>('PG_PORT'),
            username: configService.getOrThrow<string>('PG_USERNAME'),
            password: configService.getOrThrow<string>('PG_PASSWORD'),
            database: configService.getOrThrow<string>('PG_DATABASE'),
            entities: [configService.getOrThrow<string>('PG_ENTITIES')],
            migrations: ['dist/infra/migrations/*.js'],
            synchronize: false,
        });

        return PostgresDataSource.initialize();
    },
    inject: [ConfigService]
}