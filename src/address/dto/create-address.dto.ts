import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({ example: 'Rua 10' })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: 100 })
  @IsInt()
  number: number;

  @ApiProperty({ example: 'Goiânia' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'GO' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '74000-000' })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}