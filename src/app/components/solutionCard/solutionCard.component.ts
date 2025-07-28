import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './solutionCard.component.html',
  styleUrls: ['./solutionCard.component.scss'],
})
export class SolutionCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: string;
}
