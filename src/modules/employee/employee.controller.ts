/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeDto } from 'src/entity/dto/employeedto';
import { Employee } from 'src/entity/employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Post('/addEmployeeDetails')
  async addEmployeeDetails(@Body() employeeDto: EmployeeDto): Promise<any> {
    return await this.employeeService.addEmployee(employeeDto);
  }

  @Get('/allEmployeeDetails')
  async getAllEmployeeDetails():Promise<Employee[]>{
    return await this.employeeService.getAllEmployeeDetails();
  }
}
