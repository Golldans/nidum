import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/infra/database/entities/user.entity";
import { UserImpl } from "src/infra/database/implementation/user.impl";

@Injectable()
export class UpdateUserUseCase {
    constructor(private readonly userImplementation: UserImpl) {}

    async call(criteria: Partial<UserEntity>, user_data: Partial<UserEntity>): Promise<UserEntity> {
        const user = await this.userImplementation.update(criteria, user_data);
        return user;
    }
}