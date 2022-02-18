import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs';
  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
