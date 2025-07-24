import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './solutionCard.component.html',
  styleUrls: ['./solutionCard.component.scss'],
})
export class SolutionCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: string;
}
