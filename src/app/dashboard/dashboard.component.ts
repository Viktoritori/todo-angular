import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['task', 'urgency'];
  dataSource;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource = this.todoService.getTodos();
  }

}
