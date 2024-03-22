import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string; // validate password with hashing

    // async verifyPassword (password: string) {
    //     // const hash = await bcrypt.hash(this.password, this.salt);
    //     // return hash ===this.password;
    //     return await bcrypt.compare(password, this.password)

    // }

}