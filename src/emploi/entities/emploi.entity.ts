// schedule.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('emploi')
export class Emploi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  filePath: string;

  // Add more properties as needed
}
