import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgStyle, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, TranslateModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  @Input() autoSlide: boolean = true;
  @Input() showNav: boolean = true;

  displaySlides: any[] = [];
  currentIndex = 1;
  autoSlideInterval: any;

  ngOnInit() {
    if (this.slides.length === 0) return;

    this.displaySlides = [
      this.slides[this.slides.length - 1],
      ...this.slides,
      this.slides[0],
    ];

    if (this.autoSlide) this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.currentIndex++;
    this.checkLoop();
  }

  prevSlide() {
    this.currentIndex--;
    this.checkLoop();
  }

  checkLoop() {
    this.stopAutoSlide();
    const track = document.querySelector('.slides-track') as HTMLElement;
    if (!track) return;

    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${this.currentIndex * 100}%)`;

    track.addEventListener(
      'transitionend',
      () => {
        track.style.transition = 'none';

        if (this.currentIndex === this.displaySlides.length - 1) {
          this.currentIndex = 1;
        } else if (this.currentIndex === 0) {
          this.currentIndex = this.slides.length;
        }

        track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        void track.offsetWidth;
        track.style.transition = 'transform 0.6s ease-in-out';

        if (this.autoSlide) this.startAutoSlide();
      },
      { once: true }
    );
  }
}
