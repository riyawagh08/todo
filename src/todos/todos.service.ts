import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>,
  ) {}

  // 📌 GET ALL TODOS
  findAll() {
    return this.todoRepo.find();
  }

  // 📌 CREATE TODO
  create(title: string, userEmail: string) {
  const todo = this.todoRepo.create({
    title,
    completed: false,
    userEmail,
  });

  return this.todoRepo.save(todo);
}

  // 📌 TOGGLE
  async toggle(id: number) {
    const todo = await this.todoRepo.findOneBy({ id });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    todo.completed = !todo.completed;

    return this.todoRepo.save(todo);
  }

  // 📌 DELETE TODO
  async delete(id: number) {
    const todo = await this.todoRepo.findOneBy({ id });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return this.todoRepo.delete(id);
  }
}