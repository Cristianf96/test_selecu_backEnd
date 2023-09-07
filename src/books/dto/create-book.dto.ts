import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateBookDto {

    @IsString()
    @MinLength(2)
    title: string;

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

    @IsString()
    @MinLength(2)
    @IsOptional()
    cover?: string;
}
