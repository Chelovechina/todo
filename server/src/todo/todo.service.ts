import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

  async getAllTodos(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async createTodo(dto: CreateTodoDto): Promise<Todo> {
    const todo = new this.todoModel(dto);
    return todo.save();
  }

  async deleteTodo(id: string): Promise<Todo> {
    const deletedTodo = await this.todoModel.findOneAndDelete({ _id: id });

    if (!deletedTodo) {
      throw new HttpException(
        'Такого todo не существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    return deletedTodo;
  }

  async updateTodo(id: string, dto: UpdateTodoDto): Promise<Todo> {
    const updatedTodo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      { title: dto.title, description: dto.description, status: dto.status },
      { new: true },
    );

    if (!updatedTodo) {
      throw new HttpException(
        'Такого todo не существует',
        HttpStatus.BAD_REQUEST,
      );
    }

    return updatedTodo;
  }
}
