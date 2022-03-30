/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";



/**
 * starting of Employee Entity
 */
@Entity()
export class Employee {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates personalEmailId column
     */
    @Column()
    @IsEmail()
    email: string;

    /**
    * generates companyMailId column
    */
    @Column()
    @IsNumber()
  
    mobile: number;

    /**
     * generates firstName column
    */
    @Column()
    @IsString()
    
    address: string;

    /**
     * generates address column
    */
    @Column()
    @IsString()
   
    department: string;

    /**
     * generates lastName column
    */
    @Column()
    @IsNumber()
   
    sapId: number;


    /**
   * generates isActive column
   */
    @Column()
    @ApiProperty()
    isActive: boolean;

    /**
     * generates updatedAt column
     */
    @Column()
    @IsString()
    updatedTime: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates updatedat column
     */
    @Column()
    @IsString()
    updatedAt: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string; 
}