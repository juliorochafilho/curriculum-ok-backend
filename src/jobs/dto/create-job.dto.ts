import { IsEmail, IsNotEmpty, MinLength, UUIDVersion } from "class-validator";

export class CreateJobDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  salary: string;

  @IsNotEmpty()
  company: any;
}