import { Routes } from '@angular/router';
import {routes} from '../app-routing.module';

interface UserBase {
  login: string;
  role: string;
}

export class User implements UserBase {
  readonly login: string;
  readonly role: string;
  readonly availableRoutes: Routes;

  constructor(data) {
    this.login = data.login;
    this.role = data.role;
    this.availableRoutes = routes.filter((route) => this.hasPermission(route.data.permissions));
  }

  hasPermission(roles: string[]): boolean {
    if (!roles) {
      return true;
    }

    return roles.includes(this.role);
  }

}
