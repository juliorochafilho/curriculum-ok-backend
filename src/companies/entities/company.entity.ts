import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Job } from 'src/jobs/entities/job.entity';
@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: false,
    default: '',
  })
  fantasy_name: string;

  @Column({
    nullable: false,
    default: '',
  })
  ruc: string;

  @OneToMany(() => Job, (job) => job.company)
  jobs: Job[]

}