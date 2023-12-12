import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/infra/database/entities/user.entity";
import { UserImpl } from "src/infra/database/implementation/user.impl";

@Injectable()
export class ListUsersUseCase {
    constructor(private readonly userImplementation: UserImpl) {}

    async call(): Promise<UserEntity[]> {
        const users = await this.userImplementation.findAll();
        return users;
    }
}