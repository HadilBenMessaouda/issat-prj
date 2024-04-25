import { IsNotEmpty } from "class-validator";

export class CreateFiliereDto {

    @IsNotEmpty()
    idF: number;
    @IsNotEmpty()
    nomF:string;
}
