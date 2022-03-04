import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }

  logout() {
    console.log('loggout');
  }
}
