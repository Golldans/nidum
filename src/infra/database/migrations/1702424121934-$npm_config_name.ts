import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1702424121934 implements MigrationInterface {
    name = ' $npmConfigName1702424121934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "done" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "done" DROP DEFAULT`);
    }

}
