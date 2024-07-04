import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { LanguageDataService } from '../../language-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import AOS from 'aos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(public translateService: TranslateService, public languageService: LanguageDataService) { }

  ngOnInit() {
    AOS.init();
  }
}
