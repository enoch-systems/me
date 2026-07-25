import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-focus-section',
  templateUrl: './focus-section.component.html',
  styleUrls: []
})
export class FocusSectionComponent implements AfterViewInit {
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
    
    if (heading) {
      heading.classList.remove('animate-slide-from-left');
      heading.classList.add('animate-slide-from-left');
    }
    
    if (description) {
      description.classList.remove('animate-slide-from-right');
      description.classList.add('animate-slide-from-right');
    }
  }

  private resetAnimations() {
    const heading = this.elementRef.nativeElement.querySelector('h3');
    const description = this.elementRef.nativeElement.querySelector('p');
    
    if (heading) {
      heading.classList.remove('animate-slide-from-left');
    }
    
    if (description) {
      description.classList.remove('animate-slide-from-right');
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
