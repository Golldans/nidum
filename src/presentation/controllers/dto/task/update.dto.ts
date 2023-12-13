import { ApiProperty } from "@nestjs/swagger";

export class UpdateTaskDto {
    @ApiProperty({
        description: 'New main title of the task',
        minLength: 1,
        maxLength: 255,
        required: false,
    })
    title: string;

    @ApiProperty({
        description: 'New brief description of the task',
        minLength: 1,
        maxLength: 255,
        required: false,
    
    })
    description: string;

    @ApiProperty({
        description: 'New status of the task',
        required: false,
    })
    done: boolean;
}