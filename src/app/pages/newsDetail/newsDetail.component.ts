import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/newsCard/newsCard.component';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './newsDetail.component.html',
  styleUrls: ['./newsDetail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  news: any;
  relatedNews: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.http.get<any[]>('assets/data/news.json').subscribe((data) => {
        this.news = data.find((item) => item.id === id);
        const others = data.filter((item) => item.id !== id);
        this.relatedNews = this.getRandomItems(others, 3);
      });
    });
  }

  getRandomItems(list: any[], count: number): any[] {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  goToDetail(id: number): void {
    this.router.navigate(['/news', id]);
  }
}
