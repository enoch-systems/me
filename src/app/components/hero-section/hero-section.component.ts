import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {
  private observer: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElements();
          } else {
            this.resetAnimations();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (this.elementRef.nativeElement) {
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  private animateElements() {
    const name1 = this.elementRef.nativeElement.querySelector('.slide-from-left');
    const name2 = this.elementRef.nativeElement.querySelector('.slide-from-right');
    const title = this.elementRef.nativeElement.querySelector('.fade-in-center');
    const description = this.elementRef.nativeElement.querySelectorAll('.fade-in-center')[1];
    
    if (name1) {
      name1.classList.remove('animate-slide-from-left');
      void name1.offsetWidth; // Trigger reflow
      name1.classList.add('animate-slide-from-left');
    }
    
    if (name2) {
      name2.classList.remove('animate-slide-from-right');
      void name2.offsetWidth; // Trigger reflow
      name2.classList.add('animate-slide-from-right');
    }
    
    if (title) {
      title.classList.remove('animate-fade-in-center');
      void title.offsetWidth; // Trigger reflow
      title.classList.add('animate-fade-in-center');
    }
    
    if (description) {
      description.classList.remove('animate-fade-in-center');
      void description.offsetWidth; // Trigger reflow
      description.classList.add('animate-fade-in-center');
    }
  }

  private resetAnimations() {
    const name1 = this.elementRef.nativeElement.querySelector('.slide-from-left');
    const name2 = this.elementRef.nativeElement.querySelector('.slide-from-right');
    const titles = this.elementRef.nativeElement.querySelectorAll('.fade-in-center');
    
    if (name1) {
      name1.classList.remove('animate-slide-from-left');
    }
    
    if (name2) {
      name2.classList.remove('animate-slide-from-right');
    }
    
    titles.forEach((title: Element) => {
      title.classList.remove('animate-fade-in-center');
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
