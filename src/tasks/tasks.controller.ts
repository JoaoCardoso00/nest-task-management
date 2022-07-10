import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAlltasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/:changeParam')
  updateTask(
    @Param('id') id: string,
    @Param('changeParam') changeParam: string,
    @Body() changeData: object,
  ): Task {
    return this.tasksService.updateTask(id, changeParam, changeData[changeParam]);
  }
}
