import { IsNotEmpty } from "class-validator";

export class CreateGroupDto {

    
    @IsNotEmpty()
    nmrGrp: number;

    @IsNotEmpty()
    libelle: string;

    @IsNotEmpty()
    capacity: number;


}
