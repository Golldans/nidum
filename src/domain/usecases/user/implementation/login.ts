import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserImpl } from "src/infra/database/implementation/user.impl";
import * as argon from 'argon2';
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LoginUserUseCase {
    constructor(private readonly userImplementation: UserImpl, private readonly authService: AuthService) {}

    async call(user: string, password: string): Promise<any> {
        const database_user = await this.userImplementation.findOne({ username: user, });

        if (!database_user) {
            throw new UnauthorizedException("User not found");
        }

        const password_matching = await argon.verify(database_user.password, password);

        if (!password_matching) {
            throw new UnauthorizedException("Password not matching");
        }

        return await this.authService.login(database_user);
    }
}