import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // loggedInUser: { username: string, role: string ,email:string} | null = null;
  // // isLoggedIn: boolean = false;
  // constructor() { }

  // // Method to set the logged-in user information
  // setLoggedInUser(username: string, role: string,email:string) {
  //   this.loggedInUser = { username, role ,email};
  // }

  





  //  private loggedInUsername: string = '';
   
  //  private loggedInUseremail: string = '';

  
  // setLoggedInUsername(username: string) {
  //   this.loggedInUsername = username;
  // }
  // setLoggedInUseremail(email: string) {
  //   this.loggedInUseremail= email;
  // }

  // getLoggedInUsername(): string {
  //   return this.loggedInUsername;
  // }
  // getLoggedInUseremail(): string {
  //   return this.loggedInUseremail;
  // }
  loggedInUser: { username: string, role: string, email: string } | null = null;

  constructor() { }

  setLoggedInUser(username: string, role: string, email: string) {
    this.loggedInUser = { username, role, email };
    localStorage.setItem('loggedInUsername', username);
    localStorage.setItem('loggedInUserRole', role);
    localStorage.setItem('loggedInUserEmail', email);
  }
  setLoggedInUsername(username: string) {
    localStorage.setItem('loggedInUsername', username);
  }

  setLoggedInUseremail(email: string) {
    localStorage.setItem('loggedInUserEmail', email);
  }

  getLoggedInUsername(): string | null {
    return localStorage.getItem('loggedInUsername');
  }

  getLoggedInUserEmail(): string | null {
    return localStorage.getItem('loggedInUserEmail');
  }

  clearLoggedInUser() {
    localStorage.removeItem('loggedInUsername');
    localStorage.removeItem('loggedInUserRole');
    localStorage.removeItem('loggedInUserEmail');
  }
}
  
