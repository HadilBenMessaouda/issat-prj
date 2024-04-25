import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Seance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    beginning: Date;

    @Column()
    end: Date;

    @Column()
    type: string;
}
