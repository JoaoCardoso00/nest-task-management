import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './data/tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './data/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
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

    if(!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return found;
  }



  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const task = this.getTaskById(id);

  //   this.tasks = this.tasks.filter(task => task.id !== id);
  // }

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
