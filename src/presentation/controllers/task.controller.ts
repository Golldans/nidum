import { Controller, Get } from "@nestjs/common";

@Controller("task")
export class TaskController {
    @Get()
    hello(): string {
        return 'oi';
    }
}