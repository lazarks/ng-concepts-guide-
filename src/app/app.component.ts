import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng concepts';
  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
