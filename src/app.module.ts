import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { TasksRepository } from './tasks/data/tasks.repository';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmExModule.forCustomRepository([TasksRepository]),
  ],
})
export class AppModule {}
