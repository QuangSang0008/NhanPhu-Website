import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [NgFor, SliderComponent, SolutionCardComponent, RouterModule],
  templateUrl: './iotSolution.component.html',
  styleUrls: ['./iotSolution.component.scss'],
})
export class SolutionComponent {
  features = [
    {
      title: 'Giám sát thời gian thực',
      description:
        'Theo dõi thiết bị và môi trường liên tục mọi lúc, từ xa qua internet.',
    },
    {
      title: 'Cảnh báo và phản hồi nhanh',
      description:
        'Gửi thông báo tức thì khi phát hiện bất thường, giúp xử lý kịp thời.',
    },
    {
      title: 'Phân tích dữ liệu thông minh',
      description:
        'Tổng hợp và phân tích dữ liệu để dự đoán sự cố, tối ưu vận hành.',
    },
    {
      title: 'Dễ dàng tích hợp',
      description:
        'Kết nối linh hoạt với hệ thống hiện tại qua API hoặc nền tảng đám mây.',
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
      title: 'Hỗ trợ kỹ thuật',
      description:
        'Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ triển khai, vận hành và bảo trì.',
      image: 'assets/images/sp.jpg',
      link: '/solution/sp',
    },
  ];

  applications = [
    'Nông nghiệp thông minh – giám sát độ ẩm, điều khiển tưới tiêu tự động.',
    'Công nghiệp – theo dõi máy móc, kiểm soát quy trình sản xuất.',
    'Tòa nhà thông minh – điều khiển ánh sáng, điều hòa, an ninh.',
    'Logistics – theo dõi nhiệt độ, vị trí, trạng thái vận chuyển.',
    'Y tế – giám sát thiết bị, theo dõi tình trạng bệnh nhân từ xa.',
  ];
}
