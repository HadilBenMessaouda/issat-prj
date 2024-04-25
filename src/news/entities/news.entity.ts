import { BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('News')

export class News {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title: string;
    @Column()
    image: string;
    @Column()
    description:string;
    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    updatedAt: Date;    

    @BeforeUpdate()
    updateTimestamp() {
        this.updatedAt = new Date;
    }
}
