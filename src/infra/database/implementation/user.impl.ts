import { Inject, Injectable } from "@nestjs/common";
import { POSTGRES_REPOSITORIES } from "src/shared/constants/orm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserImpl {
    constructor(
        @Inject(POSTGRES_REPOSITORIES.USER_REPOSITORY)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async create(user: Partial<UserEntity>): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOne(criteria: Partial<UserEntity>): Promise<UserEntity> {
        return await this.userRepository.findOne({ where: criteria });
    }

    async update(criteria: Partial<UserEntity>, user_data: Partial<UserEntity>): Promise<UserEntity> {
        await this.userRepository.update(criteria, user_data);
        return await this.findOne(criteria);
    }

    async delete(criteria: Partial<UserEntity>): Promise<void> {
        await this.userRepository.delete(criteria);
    }
}