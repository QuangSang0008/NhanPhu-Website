import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SliderComponent } from '../../components/slider/slider.component';
import { NewsCardComponent } from '../../components/newsCard/newsCard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    HttpClientModule,
    SliderComponent,
    NewsCardComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      title:
        'The easiest way of cost-effective level measurement for all areas',
      description: 'OPTIWAVE 15XX series – Compact radar level transmitters...',
      image: 'assets/images/slider/h1.jpg',
      background: 'linear-gradient(to right, #0f172a, #1e3a8a)',
    },
    {
      title: 'Innovative technology for better performance',
      description: 'We provide advanced radar and ultrasonic solutions...',
      image: 'assets/images/slider/h2.jpg',
      background: 'linear-gradient(to right, #14532d, #22c55e)',
    },
    {
      title: 'Trusted by industries worldwide',
      description: 'Over 100 years of experience helping our customers...',
      image: 'assets/images/slider/h3.jpg',
      background: 'linear-gradient(to right, #581c87, #9333ea)',
    },
    {
      title: 'Trusted by industries worldwide',
      description: 'okok.',
      image: 'assets/images/slider/h4.jpg',
      background: 'linear-gradient(to right, #9f1239, #f43f5e)',
    },
    {
      title: 'Trusted by industries worldwide',
      description: 'Quá oke.',
      image: 'assets/images/slider/h5.jpg',
      background: 'linear-gradient(to right, #7c3aed, #4f46e5)',
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
