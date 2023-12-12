import { Inject, Injectable } from "@nestjs/common";
import { POSTGRES_REPOSITORIES } from "src/shared/constants/orm";
import { Repository } from "typeorm";
import { TaskEntity } from "../entities/task.entity";

@Injectable()
export class TaskImpl {
    constructor(
        @Inject(POSTGRES_REPOSITORIES.TASK_REPOSITORY)
        private readonly taskRepository: Repository<TaskEntity>,
    ) {}

    async create(task: Partial<TaskEntity>): Promise<TaskEntity> {
        return await this.taskRepository.save(task);
    }

    async findAll(): Promise<TaskEntity[]> {
        return await this.taskRepository.find();
    }

    async findOne(task_id: number): Promise<TaskEntity> {
        return await this.taskRepository.findOne({ where: { id: task_id } });
    }

    async update(criteria: Partial<TaskEntity>, task: Partial<TaskEntity>): Promise<TaskEntity> {
        await this.taskRepository.update(criteria, task);
        return await this.findOne(criteria.id);
    }

    async delete(criteria: Partial<TaskEntity>): Promise<void> {
        await this.taskRepository.delete(criteria);
    }
}