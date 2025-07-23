import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  newsletterEmail = '';
  subscribeNewsletter() {
    alert('Cảm ơn bạn đã đăng ký nhận tin!');
    this.newsletterEmail = '';
  }
}
