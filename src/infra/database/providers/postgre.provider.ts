import { POSTGRES_REPOSITORIES, SYSTEM_DATASOURCES } from "src/shared/constants/orm";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { TaskEntity } from "../entities/task.entity";

export const PostgresProviders = [
    {
      provide: POSTGRES_REPOSITORIES.USER_REPOSITORY,
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(UserEntity),
      inject: [SYSTEM_DATASOURCES.POSTGRES_DATASOURCE],
    },
    {
        provide: POSTGRES_REPOSITORIES.TASK_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
          dataSource.getRepository(TaskEntity),
        inject: [SYSTEM_DATASOURCES.POSTGRES_DATASOURCE],
    }
]