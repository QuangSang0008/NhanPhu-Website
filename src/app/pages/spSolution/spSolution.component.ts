import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [NgFor, SliderComponent, SolutionCardComponent, RouterModule],
  templateUrl: './spSolution.component.html',
  styleUrls: ['./spSolution.component.scss'],
})
export class SolutionComponent {
  features = [
    {
      title: 'Hỗ trợ triển khai',
      description:
        'Tư vấn, cài đặt và hướng dẫn sử dụng hệ thống tận nơi hoặc từ xa.',
    },
    {
      title: 'Bảo trì định kỳ',
      description:
        'Kiểm tra và bảo trì thiết bị định kỳ nhằm đảm bảo hoạt động ổn định.',
    },
    {
      title: 'Xử lý sự cố 24/7',
      description:
        'Luôn sẵn sàng hỗ trợ khách hàng bất cứ khi nào phát sinh sự cố.',
    },
    {
      title: 'Đào tạo & hướng dẫn',
      description:
        'Hỗ trợ đào tạo đội ngũ vận hành, nâng cao kỹ năng và nhận thức.',
    },
  ];

  relatedSolutions = [
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
  ];
}
