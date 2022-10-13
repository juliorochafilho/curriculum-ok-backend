import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

import { Company } from 'src/companies/entities/company.entity';

function verifyCompany(id) {
  const foundCompany = this.companyRepository.findOneBy({ id });
  if (foundCompany) return true;
  return false;
}

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto) {
    const companyId = createJobDto.company;
    const company = await this.companyRepository.findOneBy({ id: companyId });
    createJobDto.company = company;
    const newJob = await this.jobRepository.create(createJobDto);
    console.log(newJob);
    return this.jobRepository.save(newJob);
  }

  findAll() {
    return this.jobRepository.find()
  }

  findOne(id: string) {
    return this.jobRepository.findOneBy({id})
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
