import { DataSource } from "typeorm";

import * as dotenv from 'dotenv';

dotenv.config();

const PostgresDataSource = new DataSource({ 
    type: 'postgres', 
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [process.env.PG_ENTITIES],
    migrations: ['dist/infra/migrations/*.js'],
    synchronize: false,
})

export default PostgresDataSource;
