import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes: Routes;

  constructor(private authService: AuthService,
              ) {}
  ngOnInit() {
    this.routes = this.authService.currentUser.availableRoutes;
  }
}
