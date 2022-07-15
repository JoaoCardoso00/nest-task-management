import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './interfaces/task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './data/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task> ,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   let tasks = this.getAllTasks();

  //   if(status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }

  //   if(search) {
  //     tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
  //   }

  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.tasksRepository.save(task);

    return task;
  }

  async deleteTask(id: string): Promise<void> {
    const task = await this.tasksRepository.delete({ id });

    if (task.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
  }

  // updateTask(id: string, changeParam: string, changeData: string) {
  //   const task = this.getTaskById(id);

  //   switch(changeParam) {
  //     case  'title':
  //       task.title = changeData;
  //     break;

  //     case 'description':
  //       task.description = changeData;
  //     break;

  //     case 'status':
  //       task.status = TaskStatus[changeData];
  //     break;
  //   }

  //   return task;
  // }
}
