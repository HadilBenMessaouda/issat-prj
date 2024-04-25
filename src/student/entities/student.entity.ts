import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../groups/entities/group.entity";
import { UserEntity } from "src/auth/user.entity";
import { Role } from "src/enums/role.enum";
import { classEntity } from "src/classes/entities/class.entity";
import { filiereEntity } from "src/filiere/entities/filiere.entity";

@Entity("students")
export class studentEntity  {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({unique:true,default:""})
  numInscrit: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({name:'Userid'})
  user: UserEntity;
  
  @ManyToOne(() =>Group, group => group.students)
  @JoinColumn({name:'Grpid' })
  group: Group;

  @ManyToOne(() =>classEntity, classe => classe.students)
  classe: classEntity;

  @ManyToOne(() =>filiereEntity, filiere => filiere.students)
  filiere: filiereEntity;





  
  
    
}