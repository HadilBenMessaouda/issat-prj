import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { studentEntity } from "../../student/entities/student.entity";
import { classEntity } from "src/classes/entities/class.entity";
//import { classEntity } from "./class.entity";

@Entity("group")
export class Group {
    @PrimaryGeneratedColumn()
    Grpid: number;

    @Column()
    nmrGrp: number;

    @Column()
    libelle: string;

    @Column()
    capacity: number;

    @OneToMany(() => studentEntity, students => students.group)
    students: studentEntity[];


    @ManyToOne(() =>classEntity, classe => classe.groups)
    //@JoinColumn({name:'idClasse' })
    classe: classEntity;

}