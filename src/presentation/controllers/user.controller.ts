import { Controller, Get } from "@nestjs/common";
import { CreateUserUseCase } from "src/domain/usecases/user/create";

@Controller("user")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Get()
    hello(): void {
        console.log('cheguei')
    }
}