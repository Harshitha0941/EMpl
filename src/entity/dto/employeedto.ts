/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { IsNumber } from 'class-validator';

/**
 * Starting of EmployeeDto
 */
export class EmployeeDto {
  /**
   * firstName recieves input of type string
   */
  @IsString()
  @ApiProperty()
  email: string;

  /**
   * lastName recieves input of type string
   */
  @IsNumber()
  @ApiProperty()
  mobile: number;

  /**
 * phoneNum recieves input of type number
 */
  @IsString()
  @ApiProperty()
  address: string;
  /**
   * companyMailId recieves input of type string
   */
  @IsString()
  @ApiProperty()
  department: string;

  /**
   * companyMailId recieves input of type string
   */
   @IsNumber()
   @ApiProperty()
   sapId: number;

}