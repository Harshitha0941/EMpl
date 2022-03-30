/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from 'src/entity/dto/employeedto';
import { Employee } from 'src/entity/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async addEmployee(employeeDto: EmployeeDto): Promise<string> {
    const employee = new Employee();
    Object.assign(employee, employeeDto);
    employee.isActive = true;
    const date = new Date();
    employee.updatedAt = date.toLocaleDateString();
    employee.updatedTime = date.toLocaleDateString();
    employee.createdAt = date.toLocaleDateString();
    employee.createTime = date.toLocaleTimeString();
    await this.employeeRepo.save(employee);
    return 'Added Successfully';
  }

  
  async getAllEmployeeDetails(): Promise<Employee[]> {
    return await this.employeeRepo.find();
}

async updateEmployee(id:number,employeeDto: EmployeeDto): Promise<string> {
  // const employeeRes =  await this.employeeRepo.find(id)
  const employee = new Employee();
  Object.assign(employee, employeeDto);
  employee.isActive = true;
  const date = new Date();
  employee.updatedAt = date.toLocaleDateString();
  employee.updatedTime = date.toLocaleDateString();
  employee.createdAt = date.toLocaleDateString();
  employee.createTime = date.toLocaleTimeString();
  await this.employeeRepo.save(employee);
  return 'Added Successfully';
}
}