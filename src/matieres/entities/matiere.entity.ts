import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matiere {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomMatiere:string;
    

}
