import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";
import { LoginUserUseCase } from "src/domain/usecases/user/implementation/login";

@ApiTags('users')
@Controller("user")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase, private readonly loginUserUseCase: LoginUserUseCase) { }

    @Post("/login")
    @ApiResponse({ status: 201, description: 'Sucessful login' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async login(@Body() body: any) {
        const auth = await this.loginUserUseCase.call(body.username, body.password);

        return auth;
    }

    @Post("/create")
    @UseGuards(JwtAuthGuard)
    async create(@Body() body: any) {
        const user_created = await this.createUserUseCase.call(body);
        return user_created;
    }
}