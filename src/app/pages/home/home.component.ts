import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SliderComponent } from '../../components/slider/slider.component';
import { NewsCardComponent } from '../../components/newsCard/newsCard.component';
import { RouterModule } from '@angular/router';
import { SolutionCardComponent } from '../../components/solutionCard/solutionCard.component';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      title: 'home.slide1.title',
      description: 'home.slide1.desc',
      image: 'assets/images/slider/h1.jpg',
      background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
    },
    {
      title: 'home.slide2.title',
      description: 'home.slide2.desc',
      image: 'assets/images/slider/h2.jpg',
      background: 'linear-gradient(to right, #14532d, #22c55e)',
    },
    {
      title: 'home.slide3.title',
      description: 'home.slide3.desc',
      image: 'assets/images/slider/h3.jpg',
      background: 'linear-gradient(to right, #581c87, #9333ea)',
    },
    {
      title: 'home.slide4.title',
      description: 'home.slide4.desc',
      image: 'assets/images/slider/h4.jpg',
      background: 'linear-gradient(to right, #9f1239, #f43f5e)',
    },
    {
      title: 'home.slide5.title',
      description: 'home.slide5.desc',
      image: 'assets/images/slider/h5.jpg',
      background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
    },
  ];

  homeSolutions = [
    {
      title: 'home.solution1.title',
      description: 'home.solution1.desc',
      image: 'assets/images/scada/scada1.png',
      link: '/solution/scada',
    },
    {
      title: 'home.solution2.title',
      description: 'home.solution2.desc',
      image: 'assets/images/iot/iot1.jpg',
      link: '/solution/iot',
    },
    {
      title: 'home.solution3.title',
      description: 'home.solution3.desc',
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
