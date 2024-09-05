import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Column } from './columns/column.entity';
import { Card } from './cards/card.entity';
import { Comment } from './comments/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // или 'postgres' в зависимости от вашей БД
      host: 'localhost',
      port: 3306, // замените на 5432, если используете PostgreSQL
      username: 'root',
      password: 'password',
      database: 'trello_clone',
      entities: [Column, Card, Comment],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
