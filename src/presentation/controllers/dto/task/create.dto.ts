import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({
        description: 'Main title of the task',
        minLength: 1,
        maxLength: 255,
        required: true,
    })
    title: string;

    @ApiProperty({
        description: 'Brief description of the task',
        minLength: 1,
        maxLength: 255,
        required: true,
    })
    description: string;
}