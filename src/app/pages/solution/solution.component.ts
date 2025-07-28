import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    SliderComponent,
    SolutionCardComponent,
    TranslateModule,
  ],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent {
  solutions = [
    {
      key: 0,
      image: 'assets/images/scada/scada1.png',
      link: '/solution/scada',
    },
    { key: 1, image: 'assets/images/iot/iot1.jpg', link: '/solution/iot' },
    { key: 2, image: 'assets/images/sp.jpg', link: '/solution/sp' },
  ];
}
