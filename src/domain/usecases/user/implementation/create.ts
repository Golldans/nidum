import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/infra/database/entities/user.entity";
import { UserImpl } from "src/infra/database/implementation/user.impl";
import * as argon from 'argon2'

@Injectable()
export class CreateUserUseCase {
    constructor(
        private readonly userImplementation: UserImpl,
    ) {}

    async call(user_data: Partial<UserEntity>): Promise<UserEntity> {

        const user_password = await argon.hash(user_data.password);

        const user_payload = {
            name: user_data.name,
            username: user_data.username,
            password: user_password,
        }

        const user = await this.userImplementation.create(user_payload);
        return user;
    }
}