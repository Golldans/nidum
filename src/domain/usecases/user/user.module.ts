import { Module } from "@nestjs/common";
import { CreateUserUseCase } from "./create";

@Module({
    imports: [],
    providers: [CreateUserUseCase],
    exports: [CreateUserUseCase]
})
export class UserModule {}