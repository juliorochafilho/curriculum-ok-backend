import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { Job } from './entities/job.entity';
import { Company } from 'src/companies/entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job, Company])],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
