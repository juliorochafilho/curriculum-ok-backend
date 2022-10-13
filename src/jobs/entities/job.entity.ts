import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  salary: string;

  @ManyToOne(() => Company, (company) => company.jobs)
  company: Company;
}
