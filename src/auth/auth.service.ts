import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private configService: ConfigService) {}

    async login(user: any) {
        console.log({
            id_user: user.id,
            username: user.name
        })

        try {
            return {
                id_user: user.id,
                username: user.name,
                access_token: this.jwtService.sign({
                    id_user: user.id,
                    username: user.name
                }, {
                    secret: this.configService.get<string>('JWT_SECRET'),
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}