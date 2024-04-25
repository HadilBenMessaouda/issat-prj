// create-emploi.dto.ts
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateEmploiDto {
  @IsNotEmpty()
  @IsString()
  readonly fileName: string;

  @IsNotEmpty()
  @IsString()
  readonly filePath: string;

  // You can add more properties as needed
}
