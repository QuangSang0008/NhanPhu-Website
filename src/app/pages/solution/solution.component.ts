import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [NgFor, SliderComponent],
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent {
  features = [
    {
      title: 'Giám sát thời gian thực',
      description:
        'Theo dõi trạng thái thiết bị và quy trình vận hành theo thời gian thực, tăng độ tin cậy và kiểm soát.',
    },
    {
      title: 'Cảnh báo lỗi và sự cố',
      description:
        'Tự động phát hiện sự cố và gửi cảnh báo tức thì giúp phản ứng nhanh và giảm thiểu thiệt hại.',
    },
    {
      title: 'Điều khiển từ xa',
      description:
        'Điều khiển thiết bị như máy bơm, van, công tắc từ trung tâm hoặc qua mạng Internet.',
    },
    {
      title: 'Lưu trữ & phân tích dữ liệu',
      description:
        'Lưu lại dữ liệu lịch sử để thống kê, báo cáo và dự đoán bằng AI hoặc Big Data.',
    },
  ];
  // features = [
  //   {
  //     title: 'Giám sát thời gian thực',
  //     description:
  //       'Theo dõi trạng thái thiết bị và quy trình vận hành theo thời gian thực, tăng độ tin cậy và kiểm soát.',
  //   },
  //   {
  //     title: 'Cảnh báo lỗi và sự cố',
  //     description:
  //       'Tự động phát hiện sự cố và gửi cảnh báo tức thì giúp phản ứng nhanh và giảm thiểu thiệt hại.',
  //   },
  //   {
  //     title: 'Điều khiển từ xa',
  //     description:
  //       'Điều khiển thiết bị như máy bơm, van, công tắc từ trung tâm hoặc qua mạng Internet.',
  //   },
  //   {
  //     title: 'Lưu trữ & phân tích dữ liệu',
  //     description:
  //       'Lưu lại dữ liệu lịch sử để thống kê, báo cáo và dự đoán bằng AI hoặc Big Data.',
  //   },
  //   {
  //     title: 'Tích hợp công nghệ mới',
  //     description:
  //       'Hỗ trợ kết nối IoT, Cloud, AI và giao diện Web giúp truy cập mọi lúc, mọi nơi.',
  //   },
  //   {
  //     title: 'Thống kê & báo cáo trực quan',
  //     description:
  //       'Trình bày dữ liệu dễ hiểu bằng biểu đồ, dashboard, giúp người dùng dễ phân tích.',
  //   },
  // ];

  applications = [
    'Ngành điện lực – giám sát trạm biến áp, điều khiển lưới điện từ xa.',
    'Cấp thoát nước – giám sát mực nước, chất lượng nước, điều khiển bơm van.',
    'Dầu khí – giám sát đường ống, bể chứa, trạm nén.',
    'Sản xuất – tự động hóa dây chuyền, giám sát hiệu suất thiết bị.',
    'Giao thông – quản lý tín hiệu đèn giao thông, hệ thống hạ tầng thông minh.',
  ];
}
