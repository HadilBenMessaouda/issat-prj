import { filiereEntity } from "src/filiere/entities/filiere.entity";
import { Prof } from "src/profs/entities/prof.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("department")
export class departmentEntity{
    @PrimaryGeneratedColumn()
    
    idDepart: number;
    @Column()
    nomDepart: string;
    
    @OneToMany(() => filiereEntity, filieres => filieres.department)
    filieres: filiereEntity[];
    @ManyToOne(() =>Prof, prof => prof.departments)
    prof: Prof;
}