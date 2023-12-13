import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'task' })
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'title',
        length: 150,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'varchar',
        name: 'description',
        length: 150,
        nullable: false,
    })
    description: string;

    @Column({
        type: 'boolean',
        name: 'done',
        nullable: false,
        default: false,
    })
    done: boolean;

    @Column({
        type: 'int',
        name: 'id_user',
        nullable: false,
    })
    id_user: number;

    @ManyToOne(() => UserEntity, (user) => user.id)
    @JoinColumn({ name: 'id_user' })
    user: UserEntity;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamptz' })
    deleted_at: Date;
}