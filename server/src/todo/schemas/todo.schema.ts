import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TodoStatusEnum {
  AWAITS = 1,
  EXECUTION = 2,
  DONE = 3,
}

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: TodoStatusEnum.AWAITS })
  status: TodoStatusEnum;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
