import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { title } from 'process';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask(id: string, changeParam: string, changeData: string) {
    const task = this.getTaskById(id);
    
    switch(changeParam) {
      case  'title':
        task.title = changeData;
      break;

      case 'description':
        task.description = changeData;
      break;

      case 'status':
        task.status = TaskStatus[changeData];
      break;
    }

    return task;
  }
}
