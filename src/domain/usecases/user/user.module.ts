import { Module } from "@nestjs/common";
import { CreateUserUseCase } from "./implementation/create";
import { LoginUserUseCase } from "./implementation/login";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [AuthModule],
    providers: [CreateUserUseCase, LoginUserUseCase, AuthService],
    exports: [CreateUserUseCase, LoginUserUseCase]
})
export class UserModule {}