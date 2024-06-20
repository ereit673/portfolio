import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuValue:boolean = false;
  menuImg:string = 'assets/img/landing-page/burger-menu.png';
  burgerMenu:string = 'assets/img/landing-page/burger-menu.png';
  closeMenu:string = 'assets/img/landing-page/close-burger.png';

  openMenu(){
    this.menuValue = !this.menuValue;
    this.menuImg = this.menuValue ? this.closeMenu : this.burgerMenu
  }
}
