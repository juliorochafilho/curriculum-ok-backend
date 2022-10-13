import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateCompanyDto {
  @IsNotEmpty()
  fantasy_name: string;

  @IsNotEmpty()
  ruc: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}