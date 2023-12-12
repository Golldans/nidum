import { Module } from "@nestjs/common";
import { CreateUserUseCase } from "./implementation/create";

@Module({
    imports: [],
    providers: [CreateUserUseCase],
    exports: [CreateUserUseCase]
})
export class UserModule {}