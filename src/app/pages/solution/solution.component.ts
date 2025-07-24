import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [NgFor, RouterModule, SliderComponent, SolutionCardComponent],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent {
  solutions = [
    {
      title: 'SCADA Tự động hoá',
      description:
        'Giám sát từ xa, điều khiển linh hoạt và tích hợp hệ thống dễ dàng.',
      image: 'assets/images/scada/scada1.png',
      link: '/solution/scada',
    },
    {
      title: 'Thiết bị IoT',
      description: 'Giải pháp đo lường thông minh, kết nối mọi lúc mọi nơi.',
      image: 'assets/images/iot/iot1.jpg',
      link: '/solution/iot',
    },
    {
      title: 'Hỗ trợ kỹ thuật',
      description:
        'Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ triển khai, vận hành và bảo trì.',
      image: 'assets/images/sp.jpg',
      link: '/solution/sp',
    },
  ];
}
