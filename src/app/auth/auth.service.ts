import { AuthDataModel } from './auth-data.model';
import { UserModel } from './user.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: UserModel;

  constructor(private router: Router) {}

  registerUser(authData: AuthDataModel) {
    this.user = {
      email: authData.email,
      userID: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
    this.authSuccessfully();
  }

  login(authData: AuthDataModel) {
    this.user = {
      email: authData.email,
      userID: Math.round(Math.random() * 10000).toString(),
    };
    this.authChange.next(true);
    this.authSuccessfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccessfully() {
    this.router.navigate(['/training']);
  }
}
