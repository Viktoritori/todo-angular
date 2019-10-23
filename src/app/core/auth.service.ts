import { Injectable } from '@angular/core';
import {User} from '../shared/user.class';

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser: User ;

  constructor() {}

  setUser(user: User) {
    this.currentUser = new User(user);
  }

  isLoggedIn() {
    return Boolean(this.currentUser);
  }
}
