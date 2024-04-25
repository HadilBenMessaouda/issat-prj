import { IsNotEmpty } from "class-validator";

export class CreateClassDto {

    @IsNotEmpty()
    idClasse: number;
    @IsNotEmpty()
    niveau : number;
}
