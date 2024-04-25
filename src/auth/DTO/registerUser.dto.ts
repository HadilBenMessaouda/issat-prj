import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class registerUserDto {

    
  cin: Number;
  firstname: string;
  lastname: string;
  birthDate: Date;
  imagePath: string;
  @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    
    @IsNotEmpty()
    @MinLength(6) @MaxLength (12)
    @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Password is too weak, choose a stronger password between 6 and 12 characters"
      })
      password: string;
}