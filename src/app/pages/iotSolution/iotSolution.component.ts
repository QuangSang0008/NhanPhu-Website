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
  templateUrl: './iotSolution.component.html',
  styleUrls: ['./iotSolution.component.scss'],
})
export class SolutionComponent {
  features = [
    { title: 'iot.features.0.title', description: 'iot.features.0.desc' },
    { title: 'iot.features.1.title', description: 'iot.features.1.desc' },
    { title: 'iot.features.2.title', description: 'iot.features.2.desc' },
    { title: 'iot.features.3.title', description: 'iot.features.3.desc' },
  ];

  relatedSolutions = [
    {
      title: 'iot.relatedSolutions.0.title',
      description: 'iot.relatedSolutions.0.desc',
      image: 'assets/images/scada/scada1.png',
      link: '/solution/scada',
    },
    {
      title: 'iot.relatedSolutions.1.title',
      description: 'iot.relatedSolutions.1.desc',
      image: 'assets/images/sp.jpg',
      link: '/solution/sp',
    },
  ];

  applications = [
    'iot.applications.0',
    'iot.applications.1',
    'iot.applications.2',
    'iot.applications.3',
    'iot.applications.4',
  ];
  iotSection2List = [
    'iot.section2_list.0',
    'iot.section2_list.1',
    'iot.section2_list.2',
    'iot.section2_list.3',
  ];

  iotSection5List = [
    'iot.section5_list.0',
    'iot.section5_list.1',
    'iot.section5_list.2',
    'iot.section5_list.3',
    'iot.section5_list.4',
  ];
}
