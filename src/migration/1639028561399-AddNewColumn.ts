import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNewColumn1639028561399 implements MigrationInterface {
    name = 'AddNewColumn1639028561399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" ADD "from" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP COLUMN "from"`);
    }

}
