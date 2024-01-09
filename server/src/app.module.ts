import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      process.env.DB_URL ||
        'mongodb+srv://admin:rTeXrs48CD1U9ZDM@todo.m9njbns.mongodb.net/?retryWrites=true&w=majority',
    ),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
