import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {

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

  // getTaskById(id: string): Task {
  //   const task =  this.tasks.find(task => task.id === id);

  //   if(!task) {
  //     throw new NotFoundException(`Task with id ${id} not found`);
  //   }

  //   return task;
  // }

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
