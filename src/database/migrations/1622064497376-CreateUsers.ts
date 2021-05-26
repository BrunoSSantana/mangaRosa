import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1622064497376 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
          },
          {
            name: "cell",
            type: "varchar",
          },
          {
            name: "skills",
            type: "varchar",
          },
          {
            name: "validatedAt",
            type: "timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
