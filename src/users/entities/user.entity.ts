import { Job } from 'src/jobs/entities/job.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
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
  first_name: string;

  @Column({
    nullable: false,
    default: '',
  })
  last_name: string;

  @ManyToMany(() => Job)
  @JoinTable()
  jobs: Job[];
}
