import { filiereEntity } from "src/filiere/entities/filiere.entity";
import { Group } from "src/groups/entities/group.entity";
import { studentEntity } from "src/student/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("class")
export class classEntity{
    
    @PrimaryGeneratedColumn()
    idClasse: number;
    @Column()
    niveau: number;

    @OneToMany(() => Group, group => group.classe)
    //@JoinColumn()
    groups: Group[];

    @ManyToOne(() =>filiereEntity, filiere => filiere.classes)
    filiere: filiereEntity;

    
    @OneToMany(() => studentEntity, students => students.classe)
    students: studentEntity[];

}
