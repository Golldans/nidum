import { Injectable } from "@nestjs/common";
import { UserImpl } from "src/infra/implementation/user.impl";

@Injectable()
export class CreateUserUseCase {
    constructor(
        private readonly userImplementation: UserImpl,
    ) {}


    async call(): Promise<void> {
        console.log('cheguei')
    }
}