import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidee',
  templateUrl: './sidee.component.html',
  styleUrl: './sidee.component.scss',
})
export class SideeComponent implements OnInit {

  loggedInUsername: string = '';
  loggedInUseremail: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    const username = this.loginService.getLoggedInUsername();
    if (username !== null) {
      this.loggedInUsername = username;
    }

    const email = this.loginService.getLoggedInUserEmail();
    if (email !== null) {
      this.loggedInUseremail = email;
    }
  }
}
