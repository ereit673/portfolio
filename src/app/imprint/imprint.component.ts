import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LanguageDataService} from './../language-data.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageDataService
  ) {}
}
