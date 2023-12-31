import { IsInt, IsOptional, IsString, MinLength } from "class-validator";

export class CreateBookDto {

    @IsInt()
    @IsOptional()
    serie: number;

    @IsString()
    @MinLength(2)
    title: string;

    @IsString()
    @MinLength(2)
    publisher: string;

    @IsString()
    @MinLength(2)
    author: string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    gender?: string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    synopsis?: string;
}
