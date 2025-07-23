import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SliderComponent, LucideAngularModule],
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
  submitForm() {
    alert('Cảm ơn bạn đã liên hệ!');
    this.name = this.email = this.phone = this.company = this.message = '';
  }
  subscribeNewsletter() {
    alert('Cảm ơn bạn đã đăng ký nhận tin!');
    this.newsletterEmail = '';
  }
}
