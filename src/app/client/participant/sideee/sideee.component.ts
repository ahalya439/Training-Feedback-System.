import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-sideee',
  templateUrl: './sideee.component.html',
  styleUrl: './sideee.component.scss',
})
export class SideeeComponent implements OnInit {
 
  loggedInUsername: string = ''; 
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    const loggedInUsername = this.loginService.getLoggedInUsername();
    if (loggedInUsername !== null) {
      this.loggedInUsername = loggedInUsername; 
    } else {
    }
  }
}
