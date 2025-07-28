import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [
    NgFor,
    SliderComponent,
    SolutionCardComponent,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './spSolution.component.html',
  styleUrls: ['./spSolution.component.scss'],
})
export class SolutionComponent {
  features = [
    {
      title: 'sp.features.0.title',
      description: 'sp.features.0.description',
    },
    {
      title: 'sp.features.1.title',
      description: 'sp.features.1.description',
    },
    {
      title: 'sp.features.2.title',
      description: 'sp.features.2.description',
    },
    {
      title: 'sp.features.3.title',
      description: 'sp.features.3.description',
    },
  ];

  relatedSolutions = [
    {
      title: 'sp.related.0.title',
      description: 'sp.related.0.description',
      image: 'assets/images/scada/scada1.png',
      link: '/solution/scada',
    },
    {
      title: 'sp.related.1.title',
      description: 'sp.related.1.description',
      image: 'assets/images/iot/iot1.jpg',
      link: '/solution/iot',
    },
  ];
}
