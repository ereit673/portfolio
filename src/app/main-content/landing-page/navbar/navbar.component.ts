import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageDataService } from './../../../language-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuValue: boolean = false;
  menuImg: string = 'assets/img/landing-page/burger-menu.png';
  burgerMenu: string = 'assets/img/landing-page/burger-menu.png';
  closeMenu: string = 'assets/img/landing-page/close-burger.png';

  constructor(
    public translateService: TranslateService,
    public languageService: LanguageDataService
  ) {}

  langBoolean = inject(LanguageDataService);

  changeLanguage(langCode: string) {
    this.langBoolean.changeLanguageService(langCode);

  }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuImg = this.menuValue ? this.closeMenu : this.burgerMenu;
  }
}
