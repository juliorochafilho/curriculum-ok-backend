import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'juliorocha',
  password: 'j30274200',
  database: 'curriculumok',
  entities: [__dirname + '/../**/entities/*.entity.{js,ts}'],
  synchronize: true,
  autoLoadEntities: true,
};