import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nested-routes',
  templateUrl: './nested-routes.component.html',
  styleUrls: ['./nested-routes.component.scss'],
})
export class NestedRoutesComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isUserLoggedIn() {
    return this.authService.isAuthenticatedSimple();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
