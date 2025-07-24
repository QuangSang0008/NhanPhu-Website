import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SliderComponent } from '../../components/slider/slider.component';
import { NewsCardComponent } from '../../components/newsCard/newsCard.component';
import { RouterModule } from '@angular/router';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    SliderComponent,
    NewsCardComponent,
    RouterModule,
    SolutionCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      title: 'Giải pháp đo mức dễ dàng và tiết kiệm chi phí cho mọi lĩnh vực',
      description:
        'Dòng sản phẩm OPTIWAVE 15XX là bộ phát mức radar nhỏ gọn, lý tưởng cho các ứng dụng trong bể chứa, silo và bồn chứa ở nhiều ngành công nghiệp khác nhau. Thiết kế chắc chắn, dễ lắp đặt và không yêu cầu bảo trì thường xuyên.',
      image: 'assets/images/slider/h1.jpg',
      background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
    },
    {
      title: 'Công nghệ tiên tiến mang đến hiệu suất vượt trội',
      description:
        'Chúng tôi cung cấp các giải pháp đo mức bằng radar và siêu âm hiện đại, giúp doanh nghiệp nâng cao độ chính xác, giảm thiểu sai số và tối ưu quy trình sản xuất với độ tin cậy cao.',
      image: 'assets/images/slider/h2.jpg',
      background: 'linear-gradient(to right, #14532d, #22c55e)',
    },
    {
      title: 'Hơn 10 năm đồng hành cùng doanh nghiệp toàn cầu',
      description:
        'Với hơn 10 năm kinh nghiệm trong lĩnh vực đo lường và điều khiển quy trình, chúng tôi đã đồng hành cùng hàng ngàn doanh nghiệp toàn cầu để mang lại sự ổn định, chính xác và hiệu quả vận hành lâu dài.',
      image: 'assets/images/slider/h3.jpg',
      background: 'linear-gradient(to right, #581c87, #9333ea)',
    },
    {
      title: 'Thiết bị chất lượng cao – Giải pháp phù hợp',
      description:
        'Chúng tôi cam kết mang đến các thiết bị chất lượng cao, dịch vụ hỗ trợ tận tâm và giải pháp kỹ thuật phù hợp với từng nhu cầu thực tế của doanh nghiệp.',
      image: 'assets/images/slider/h4.jpg',
      background: 'linear-gradient(to right, #9f1239, #f43f5e)',
    },
    {
      title: 'Đối tác tin cậy trong hành trình chuyển đổi số',
      description:
        'Hàng ngàn đối tác toàn cầu đã lựa chọn chúng tôi làm người đồng hành đáng tin cậy trong hành trình chuyển đổi số và tối ưu quy trình sản xuất.',
      image: 'assets/images/slider/h5.jpg',
      background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
    },
  ];

  homeSolutions = [
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
  newsList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data/news.json').subscribe((data) => {
      this.newsList = data.slice(-3);
    });
  }
}
