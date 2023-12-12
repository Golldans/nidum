import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/infra/entities/user.entity";
import { UserImpl } from "src/infra/implementation/user.impl";

@Injectable()
export class ListUsersUseCase {
    constructor(private readonly userImplementation: UserImpl) {}

    async call(): Promise<UserEntity[]> {
        const users = await this.userImplementation.findAll();
        return users;
    }
}