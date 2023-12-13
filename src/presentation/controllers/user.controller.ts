import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserUseCase } from "src/domain/usecases/user/implementation/create";
import { LoginUserUseCase } from "src/domain/usecases/user/implementation/login";
import { CreateUserDto } from "./dto/user/create.dto";
import { LoginDto } from "./dto/user/login.dto";
import { UserEntity } from "src/infra/database/entities/user.entity";

@ApiTags('users')
@Controller("user")
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase, private readonly loginUserUseCase: LoginUserUseCase) { }

    @Post("/login")
    @ApiResponse({ status: 201, description: 'Sucessful login' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    async login(@Body() body: LoginDto) {
        const auth = await this.loginUserUseCase.call(body.username, body.password);

        return auth;
    }

    @Post("/create")
    @ApiResponse({ status: 201, description: 'User created' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 406, description: 'Invalid data provided as body' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    @UseGuards(JwtAuthGuard)
    async create(@Body() body: CreateUserDto): Promise<UserEntity> {
        const user_created = await this.createUserUseCase.call(body);
        return user_created;
    }
}