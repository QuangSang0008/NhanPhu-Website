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
  templateUrl: './scadaSolution.component.html',
  styleUrls: ['./scadaSolution.component.scss'],
})
export class SolutionComponent {
  features = [
    { title: 'scada.features.0.title', description: 'scada.features.0.desc' },
    { title: 'scada.features.1.title', description: 'scada.features.1.desc' },
    { title: 'scada.features.2.title', description: 'scada.features.2.desc' },
    { title: 'scada.features.3.title', description: 'scada.features.3.desc' },
  ];
  relatedSolutions = [
    {
      title: 'scada.relatedSolutions.0.title',
      description: 'scada.relatedSolutions.0.desc',
      image: 'assets/images/iot/iot1.jpg',
      link: '/solution/iot',
    },
    {
      title: 'scada.relatedSolutions.1.title',
      description: 'scada.relatedSolutions.1.desc',
      image: 'assets/images/sp.jpg',
      link: '/solution/sp',
    },
  ];

  applications = [
    'Ngành điện lực – giám sát trạm biến áp, điều khiển lưới điện từ xa.',
    'Cấp thoát nước – giám sát mực nước, chất lượng nước, điều khiển bơm van.',
    'Dầu khí – giám sát đường ống, bể chứa, trạm nén.',
    'Sản xuất – tự động hóa dây chuyền, giám sát hiệu suất thiết bị.',
    'Giao thông – quản lý tín hiệu đèn giao thông, hệ thống hạ tầng thông minh.',
  ];

  section5List = [
    'scada.section5_list.0',
    'scada.section5_list.1',
    'scada.section5_list.2',
    'scada.section5_list.3',
    'scada.section5_list.4',
  ];
  section6List = [
    'scada.section6_list.0',
    'scada.section6_list.1',
    'scada.section6_list.2',
  ];
}
