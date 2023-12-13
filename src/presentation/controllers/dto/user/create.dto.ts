import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'Real name of the user',
        minLength: 1,
        maxLength: 255,
        required: true,
    })
    name: string;

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