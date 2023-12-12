import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";
import { LoginUserUseCase } from "src/domain/usecases/user/implementation/login";

@Controller("user")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase, private readonly loginUserUseCase: LoginUserUseCase) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    hello(): void {
        console.log('cheguei')
    }

    @Post("/login")
    async login(@Body() body: any) {
        const auth = await this.loginUserUseCase.call(body.username, body.password);

        return auth;
    }

    @Post("/create")
    async create(@Body() body: any) {
        const user_created = await this.createUserUseCase.call(body);
        return user_created;
    }
}