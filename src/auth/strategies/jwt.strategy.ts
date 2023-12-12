import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreEpiration: false,
            secretOrKey: configService.getOrThrow<string>('JWT_SECRET')
        });
    }

    async validate(payload: any) {
        return {
            id_user: payload.id_user,
            user: payload.user,
        }
    }
}