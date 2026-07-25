import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-selected-work',
  templateUrl: './selected-work.component.html',
  styleUrls: ['./selected-work.component.css']
})
export class SelectedWorkComponent implements AfterViewInit {
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
    const heading = this.elementRef.nativeElement.querySelector('h3');
    const description = this.elementRef.nativeElement.querySelector('p');
    const projectTitles = this.elementRef.nativeElement.querySelectorAll('h4');
    
    if (heading) {
      heading.classList.remove('animate-slide-from-left');
      void heading.offsetWidth;
      heading.classList.add('animate-slide-from-left');
    }
    
    if (description) {
      description.classList.remove('animate-slide-from-right');
      void description.offsetWidth;
      description.classList.add('animate-slide-from-right');
    }
    
    projectTitles.forEach((title: Element, index: number) => {
      setTimeout(() => {
        const titleEl = title as HTMLElement;
        titleEl.classList.remove('animate-slide-from-left');
        void titleEl.offsetWidth;
        titleEl.classList.add('animate-slide-from-left');
      }, index * 150);
    });
  }

  private resetAnimations() {
    const heading = this.elementRef.nativeElement.querySelector('h3');
    const description = this.elementRef.nativeElement.querySelector('p');
    const projectTitles = this.elementRef.nativeElement.querySelectorAll('h4');
    
    if (heading) {
      heading.classList.remove('animate-slide-from-left');
    }
    
    if (description) {
      description.classList.remove('animate-slide-from-right');
    }
    
    projectTitles.forEach((title: Element) => {
      title.classList.remove('animate-slide-from-left');
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
