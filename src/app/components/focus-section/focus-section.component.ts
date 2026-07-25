import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-focus-section',
  templateUrl: './focus-section.component.html',
  styleUrls: []
})
export class FocusSectionComponent implements AfterViewInit {
  private observer: IntersectionObserver | null = null;
  hasAnimated = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateElements();
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
      heading.classList.add('animate-slide-from-left');
    }
    
    if (description) {
      description.classList.add('animate-slide-from-right');
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
