import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoService} from '../shared/todo.service';
import {ToDo} from '../dashboard/dashboard-model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
todos: ToDo[];

constructor(public dialog: MatDialog,
            private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  openTodoDialog(data = {}) {
    const dialogRef = this.dialog.open(TodoEditComponent, {
      width: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.processTodo(result);
    });

    this.todos = this.todoService.getTodos();
  }

  remove(todo: ToDo) {
    this.todoService.removeTodo(todo);
  }

}
