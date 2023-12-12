import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";

@Controller("user")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    hello(): void {
        console.log('cheguei')
    }

    @Post("/login")
    login(@Body() body: any) {
        console.log(body)
    }

    @Post("/create")
    create(@Body() body: any) {
        console.log(body)
    }
}