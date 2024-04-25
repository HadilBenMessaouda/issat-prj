// create-seance.dto.ts
import { IsNotEmpty, IsString, IsIn, IsISO8601 } from 'class-validator';

export class CreateSeanceDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['cours', 'td', 'tp']) // Ensure type is one of 'cours', 'td', or 'tp'
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  @IsISO8601({ strict: false }) // Ensure beginning is in ISO 8601 time format (e.g., 'HH:mm')
  readonly beginning: string;

  @IsNotEmpty()
  @IsString()
  @IsISO8601({ strict: false }) // Ensure beginning is in ISO 8601 time format (e.g., 'HH:mm')
  readonly end: string;
}
