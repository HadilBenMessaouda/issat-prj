import { UserEntity } from "src/auth/user.entity";
import { departmentEntity } from "src/department/entities/department.entity";
import { Matiere } from "src/matieres/entities/matiere.entity";

export class CreateProfDto {
    readonly user: UserEntity;
    readonly departments: departmentEntity[];
    readonly matieres: Matiere[];

}
