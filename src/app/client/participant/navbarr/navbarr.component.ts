import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrl: './navbarr.component.scss',
})
export class NavbarrComponent implements OnInit {
  loggedInUser: { username: string; role: string } | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loggedInUser = this.loginService.loggedInUser;
  }
}
