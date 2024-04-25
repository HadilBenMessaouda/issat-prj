import { MigrationInterface, QueryRunner } from "typeorm";

export class NewwMigration1713786721821 implements MigrationInterface {
    name = 'NewwMigration1713786721821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matiere\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nomMatiere\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Profs\` (\`profId\` int NOT NULL AUTO_INCREMENT, \`Userid\` int NULL, UNIQUE INDEX \`REL_e6424bc87cf6d6a7f9c8c65e36\` (\`Userid\`), PRIMARY KEY (\`profId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department\` (\`idDepart\` int NOT NULL AUTO_INCREMENT, \`nomDepart\` varchar(255) NOT NULL, \`profProfId\` int NULL, PRIMARY KEY (\`idDepart\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`filiere\` (\`idF\` int NOT NULL AUTO_INCREMENT, \`nomF\` varchar(255) NOT NULL, \`departmentIdDepart\` int NULL, PRIMARY KEY (\`idF\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Users\` (\`Userid\` int NOT NULL AUTO_INCREMENT, \`cin\` int NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`birthDate\` date NOT NULL DEFAULT CURRENT_DATE, \`imagePath\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`salt\` varchar(255) NOT NULL, \`role\` enum ('student', 'teacher', 'admin1', 'admin2', 'admin3', 'Role') NOT NULL DEFAULT 'student', PRIMARY KEY (\`Userid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`seance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`beginning\` datetime NOT NULL, \`end\` datetime NOT NULL, \`type\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`News\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`emploi\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fileName\` varchar(255) NOT NULL, \`filePath\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`profs_matieres_matiere\` (\`profsProfId\` int NOT NULL, \`matiereId\` int NOT NULL, INDEX \`IDX_76911b31afade1577c8602e550\` (\`profsProfId\`), INDEX \`IDX_add339b3f7c398eb6622a1e67d\` (\`matiereId\`), PRIMARY KEY (\`profsProfId\`, \`matiereId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`class\` ADD \`filiereIdF\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`group\` ADD \`classeIdClasse\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`classeIdClasse\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`filiereIdF\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_f0c052eabb11841ea31eac9d2f9\``);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`numInscrit\` \`numInscrit\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`Userid\` \`Userid\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`Grpid\` \`Grpid\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Profs\` ADD CONSTRAINT \`FK_e6424bc87cf6d6a7f9c8c65e368\` FOREIGN KEY (\`Userid\`) REFERENCES \`Users\`(\`Userid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`department\` ADD CONSTRAINT \`FK_1c872d8842fe213e66d8941aac1\` FOREIGN KEY (\`profProfId\`) REFERENCES \`Profs\`(\`profId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`filiere\` ADD CONSTRAINT \`FK_1b99e6b82e7cb9fa279f091bd2e\` FOREIGN KEY (\`departmentIdDepart\`) REFERENCES \`department\`(\`idDepart\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`class\` ADD CONSTRAINT \`FK_395088dd61f9f4b689794b9c19a\` FOREIGN KEY (\`filiereIdF\`) REFERENCES \`filiere\`(\`idF\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`group\` ADD CONSTRAINT \`FK_49b9fd4f53f8d4fbad3515ad5ef\` FOREIGN KEY (\`classeIdClasse\`) REFERENCES \`class\`(\`idClasse\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_93ec94d7488fa84a9f8022946ea\` FOREIGN KEY (\`Userid\`) REFERENCES \`Users\`(\`Userid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_f0c052eabb11841ea31eac9d2f9\` FOREIGN KEY (\`Grpid\`) REFERENCES \`group\`(\`Grpid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_21ff67ba7036153c7acc6e25261\` FOREIGN KEY (\`classeIdClasse\`) REFERENCES \`class\`(\`idClasse\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_f49a6777fee7217cb2d76836e5e\` FOREIGN KEY (\`filiereIdF\`) REFERENCES \`filiere\`(\`idF\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`profs_matieres_matiere\` ADD CONSTRAINT \`FK_76911b31afade1577c8602e5509\` FOREIGN KEY (\`profsProfId\`) REFERENCES \`Profs\`(\`profId\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`profs_matieres_matiere\` ADD CONSTRAINT \`FK_add339b3f7c398eb6622a1e67d9\` FOREIGN KEY (\`matiereId\`) REFERENCES \`matiere\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profs_matieres_matiere\` DROP FOREIGN KEY \`FK_add339b3f7c398eb6622a1e67d9\``);
        await queryRunner.query(`ALTER TABLE \`profs_matieres_matiere\` DROP FOREIGN KEY \`FK_76911b31afade1577c8602e5509\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_f49a6777fee7217cb2d76836e5e\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_21ff67ba7036153c7acc6e25261\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_f0c052eabb11841ea31eac9d2f9\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_93ec94d7488fa84a9f8022946ea\``);
        await queryRunner.query(`ALTER TABLE \`group\` DROP FOREIGN KEY \`FK_49b9fd4f53f8d4fbad3515ad5ef\``);
        await queryRunner.query(`ALTER TABLE \`class\` DROP FOREIGN KEY \`FK_395088dd61f9f4b689794b9c19a\``);
        await queryRunner.query(`ALTER TABLE \`filiere\` DROP FOREIGN KEY \`FK_1b99e6b82e7cb9fa279f091bd2e\``);
        await queryRunner.query(`ALTER TABLE \`department\` DROP FOREIGN KEY \`FK_1c872d8842fe213e66d8941aac1\``);
        await queryRunner.query(`ALTER TABLE \`Profs\` DROP FOREIGN KEY \`FK_e6424bc87cf6d6a7f9c8c65e368\``);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`Grpid\` \`Grpid\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`Userid\` \`Userid\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`numInscrit\` \`numInscrit\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_f0c052eabb11841ea31eac9d2f9\` FOREIGN KEY (\`Grpid\`) REFERENCES \`group\`(\`Grpid\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`filiereIdF\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`classeIdClasse\``);
        await queryRunner.query(`ALTER TABLE \`group\` DROP COLUMN \`classeIdClasse\``);
        await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`filiereIdF\``);
        await queryRunner.query(`DROP INDEX \`IDX_add339b3f7c398eb6622a1e67d\` ON \`profs_matieres_matiere\``);
        await queryRunner.query(`DROP INDEX \`IDX_76911b31afade1577c8602e550\` ON \`profs_matieres_matiere\``);
        await queryRunner.query(`DROP TABLE \`profs_matieres_matiere\``);
        await queryRunner.query(`DROP TABLE \`emploi\``);
        await queryRunner.query(`DROP TABLE \`News\``);
        await queryRunner.query(`DROP TABLE \`seance\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
        await queryRunner.query(`DROP TABLE \`filiere\``);
        await queryRunner.query(`DROP TABLE \`department\``);
        await queryRunner.query(`DROP INDEX \`REL_e6424bc87cf6d6a7f9c8c65e36\` ON \`Profs\``);
        await queryRunner.query(`DROP TABLE \`Profs\``);
        await queryRunner.query(`DROP TABLE \`matiere\``);
    }

}
