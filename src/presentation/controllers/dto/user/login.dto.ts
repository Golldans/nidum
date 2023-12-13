import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({
        description: 'Username of the user',
        minLength: 1,
        maxLength: 255,
        required: true,
    })
    username: string;

    @ApiProperty({
        description: 'Password of the user',
        minLength: 10,
        maxLength: 255,
        required: true,
    })
    password: string;
}