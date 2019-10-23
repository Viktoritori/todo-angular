import { Injectable } from '@angular/core';
import {ToDo} from '../dashboard/dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ToDo[] = [{id: 'a225ge', task: 'Became an Admin', urgency: 'Urgent'}];

  constructor() { }

  processTodo(todo: ToDo) {
    console.log(todo);
    if (todo.id) {
      this.editTodo(todo);
      return;
    }

    this.addTodo(todo);
  }

  addTodo(todo: ToDo) {
    todo.id = this.getUniqueId();
    this.todos.push(todo);
  }

  editTodo(todo: ToDo) {
    const todoId = this.todos.findIndex(item => item.id === todo.id);
    this.todos.splice(todoId, 1, todo);
  }

  removeTodo(todo) {
    const todoId = this.todos.findIndex(item => item.id === todo.id);
    this.todos.splice(todoId, 1);
  }

  getTodos() {
    return this.todos;
  }

  getUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
