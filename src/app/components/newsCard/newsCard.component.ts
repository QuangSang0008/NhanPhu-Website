import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'newscard',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './newsCard.component.html',
  styleUrls: ['./newsCard.component.scss'],
})
export class NewsCardComponent {
  @Input() newsItem: any;
  @Input() useDetailLink: boolean = true;
  @Input() isSmall: boolean = false;
}
