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
      title: 'Giải pháp đo mức tối ưu',
      description:
        'Dòng OPTIWAVE 15XX là bộ phát radar nhỏ gọn, lý tưởng cho bể chứa và silo. Thiết kế chắc chắn, dễ lắp đặt và không cần bảo trì.',
      image: 'assets/images/slider/h1.jpg',
      background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
    },
    {
      title: 'Hiệu suất vượt trội, công nghệ mới',
      description:
        'Cung cấp giải pháp đo mức bằng radar và siêu âm hiện đại, nâng cao độ chính xác, giảm sai số và tối ưu quy trình sản xuất.',
      image: 'assets/images/slider/h2.jpg',
      background: 'linear-gradient(to right, #14532d, #22c55e)',
    },
    {
      title: '10 năm đồng hành doanh nghiệp',
      description:
        'Với hơn 10 năm kinh nghiệm, chúng tôi đồng hành cùng doanh nghiệp toàn cầu mang lại sự ổn định và hiệu quả vận hành.',
      image: 'assets/images/slider/h3.jpg',
      background: 'linear-gradient(to right, #581c87, #9333ea)',
    },
    {
      title: 'Thiết bị chất lượng, giải pháp hay',
      description:
        'Cam kết mang đến thiết bị chất lượng cao, hỗ trợ tận tâm và giải pháp kỹ thuật phù hợp với nhu cầu thực tế.',
      image: 'assets/images/slider/h4.jpg',
      background: 'linear-gradient(to right, #9f1239, #f43f5e)',
    },
    {
      title: 'Đối tác chuyển đổi số uy tín',
      description:
        'Hàng ngàn đối tác toàn cầu tin tưởng lựa chọn chúng tôi trong hành trình chuyển đổi số và tối ưu sản xuất.',
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
