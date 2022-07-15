import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../interfaces/task-status.enum';
export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsString()
  @IsOptional()
  search?: string;
}
