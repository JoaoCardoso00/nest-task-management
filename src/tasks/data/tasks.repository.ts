import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

//TODO: fix error
//! ERROR [ExceptionHandler] No repository for "TasksRepository" was found. Looks like this entity is not registered in current "default" connection?

EntityRepository(Task);
export class TasksRepository extends Repository<Task> {}
