import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { LucideAngularModule } from 'lucide-angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SliderComponent,
    LucideAngularModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name = '';
  email = '';
  phone = '';
  company = '';
  message = '';
  newsletterEmail = '';
  constructor(private translate: TranslateService) {}
  submitForm() {
    alert(this.translate.instant('contact.success_alert'));
    this.name = this.email = this.phone = this.company = this.message = '';
  }
}
