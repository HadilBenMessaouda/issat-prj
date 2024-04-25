import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/enums/role.enum";
import { studentEntity } from "src/student/entities/student.entity";


@Entity('Users')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    Userid: number;

    @Column()
    cin: Number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;
    
    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    birthDate:Date; 

    @Column()
    imagePath: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string; // validate password with hashing

    
    @Column({ type: 'enum', enum: Role, default: Role.Student })
    role: Role[];

    @OneToOne(() => studentEntity)
    student:studentEntity;

    

   
   
    
   
}