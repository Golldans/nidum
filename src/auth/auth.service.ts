import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: any) {
        try {
            return {
                id_user: user.id_user,
                username: user.name,
                access_token: this.jwtService.sign({
                    id_user: user.id_user,
                    username: user.name
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}