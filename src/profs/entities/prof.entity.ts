import { UserEntity } from "src/auth/user.entity";
import { departmentEntity } from "src/department/entities/department.entity";
import { Matiere } from "src/matieres/entities/matiere.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Profs")
export class Prof {

    @PrimaryGeneratedColumn()
    profId: number;

    @OneToOne(() => UserEntity)
    @JoinColumn({name:'Userid'})
    user: UserEntity;

    @OneToMany(() => departmentEntity, departments => departments.prof)
    departments: departmentEntity[];

     @ManyToMany(() => Matiere)
     @JoinTable()
     matieres: Matiere[]

}
