import { IsNotEmpty } from "class-validator";

export class CreateDepartmentDto {

    @IsNotEmpty()
    idDepart: number;

    @IsNotEmpty()
    nomDepart: string;
}
