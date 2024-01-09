import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { IsMongoId } from 'class-validator';

class ParamsWithId {
  @IsMongoId()
  readonly id: string;
}

@Controller('')
export class TodoController {
  constructor(private todoService: TodoService) { }

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto);
  }

  @Put('/:id')
  updateTodo(@Param() params: ParamsWithId, @Body() dto: UpdateTodoDto) {
    return this.todoService.updateTodo(params.id, dto);
  }

  @Delete('/:id')
  deleteTodo(@Param() params: ParamsWithId) {
    return this.todoService.deleteTodo(params.id);
  }
}
