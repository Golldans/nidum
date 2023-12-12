import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TaskEntity } from "./task.entity";

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        name: 'name',
        length: 150,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        name: 'username',
        length: 150,
        nullable: false,
    })
    username: string;

    @Column({
        type: 'varchar',
        name: 'password',
        length: 150,
        nullable: false,
    })
    password: string;

    @OneToMany(() => TaskEntity, (task) => task.user)
    tasks: TaskEntity[];

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamptz' })
    deleted_at: Date;
}
