import { Component, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '.nav-link',
})
export class NavLinkDirective {
  constructor(private host: AppComponent, private el: ElementRef) {}

  @HostListener('click') onCLick() {
    this.host.toggleNav();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showNav: boolean = false;

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
