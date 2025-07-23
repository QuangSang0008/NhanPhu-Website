import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, TranslateModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private translate = inject(TranslateService);
  currentLang = this.translate.currentLang || 'vi';
  dropdownOpen = false;

  setLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
