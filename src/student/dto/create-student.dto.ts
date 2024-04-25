import { IsNotEmpty } from "class-validator";
import { Group } from "src/groups/entities/group.entity";

export class CreateStudentDto {
    @IsNotEmpty()
    numInscrit: string;
    
    @IsNotEmpty()
    Userid:number
   
    @IsNotEmpty()
    group: Group;
}
