import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // GET
  @Get()
  getAll() {
    return this.todosService.findAll();
  }

  // POST
  @Post()
  create(@Body() body: any) {
    return this.todosService.create(
      body.title,
      body.userEmail,
    );
  }

  // TOGGLE
  @Post(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.todosService.toggle(Number(id));
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.delete(Number(id));
  }
}