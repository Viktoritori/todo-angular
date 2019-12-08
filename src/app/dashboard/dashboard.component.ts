import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToDo} from './dashboard-model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['task', 'urgency'];

  form: FormGroup;
  tasks: ToDo[] = [];
  tasksToShow: ToDo[];

  constructor(private formBuilder: FormBuilder,
              private todoService: TodoService) { }

  ngOnInit() {
    this.tasksToShow = this.todoService.getTodos();
    this.tasks = this.tasksToShow.slice();

    this.form = this.formBuilder.group({
      search: null,
    });

    this.form.get('search').valueChanges.subscribe(value => {
      this.filterTask(value.toLowerCase());
    });

    this.form.valueChanges.subscribe(value => {
      console.log('name has changed:', value)
    });

  }
  filterTask(value) {
    this.tasksToShow = this.tasks.filter(item => item.task.toLowerCase().indexOf(value) !== -1);
  }

}
