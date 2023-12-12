import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/infra/entities/user.entity";
import { UserImpl } from "src/infra/implementation/user.impl";

@Injectable()
export class CreateUserUseCase {
    constructor(
        private readonly userImplementation: UserImpl,
    ) {}

    async call(user_data: Partial<UserEntity>): Promise<UserEntity> {
        const user = await this.userImplementation.create(user_data);
        return user;
    }
}