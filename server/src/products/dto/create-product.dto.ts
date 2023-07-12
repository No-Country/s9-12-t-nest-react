import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';
import { IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Item name',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    description: 'Item description',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  description: string;

  @ApiProperty({
    description: 'Item images',
    nullable: false,
  })
  @IsArray()
  images: string[];

  @ApiProperty({
    description: 'Item owner',
    nullable: false,
  })
  @IsString()
  owner: string;

  @ApiProperty({
    description: 'Item category',
    nullable: false,
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: 'Item Subcategory',
    nullable: false,
  })
  @IsString()
  subcategory: string;

  @ApiProperty({
    description: 'Item longitude',
    nullable: false,
  })
  @IsArray()
  @IsString()
  lon: string;

  @ApiProperty({
    description: 'Item latitude',
    nullable: false,
  })
  @IsArray()
  @IsString()
  lat: string;
}
