import { CustomRepository } from "src/database/typeorm-ex.decorator";
import { EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {
}