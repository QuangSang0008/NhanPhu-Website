import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../components/newsCard/newsCard.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SliderComponent, TranslateModule],
  templateUrl: './newsList.component.html',
  styleUrls: ['./newsList.component.scss'],
})
export class NewsListComponent implements OnInit {
  newsList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/news.json').subscribe((data) => {
      this.newsList = data.reverse();
    });
  }

  viewDetail(id: number) {
    this.router.navigate(['/news', id]);
  }
}
