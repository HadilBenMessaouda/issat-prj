import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateNewsDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsDateString()
    createdAt?: Date;

    @IsOptional()
    @IsDateString()
    updatedAt?: Date;
}
