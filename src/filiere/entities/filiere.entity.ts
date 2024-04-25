import { classEntity } from "src/classes/entities/class.entity";
import { departmentEntity } from "src/department/entities/department.entity";
import { studentEntity } from "src/student/entities/student.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("filiere")  
export class filiereEntity {
    @PrimaryGeneratedColumn()
    idF: number;
    @Column()
    nomF: string;
    
    @OneToMany(() => classEntity, classes => classes.filiere)
    classes: classEntity[];

    @ManyToOne(() =>departmentEntity, department => department.filieres)
    department: departmentEntity;

    @OneToMany(() => studentEntity, students => students.filiere)
    students: studentEntity[];    
}