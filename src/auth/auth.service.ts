import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { ISignedUser } from "./types/signed_user.interface";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private configService: ConfigService) {}

    async login(user: ISignedUser) {
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