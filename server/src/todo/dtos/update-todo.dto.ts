import { IsIn, IsString, MinLength } from 'class-validator';
import { TodoStatusEnum } from '../schemas/todo.schema';

export class UpdateTodoDto {
  @IsString()
  @MinLength(1)
  readonly title: string;

  @IsString()
  @MinLength(1)
  readonly description: string;

  @IsIn([1, 2, 3])
  readonly status: TodoStatusEnum;
}
