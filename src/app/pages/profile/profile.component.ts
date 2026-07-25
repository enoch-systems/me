import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FocusSectionComponent } from '../../components/focus-section/focus-section.component';
import { SelectedWorkComponent } from '../../components/selected-work/selected-work.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, FocusSectionComponent, SelectedWorkComponent, FooterSectionComponent],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  menuOpen = false;

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenuAndScroll(sectionId?: string) {
    this.menuOpen = false;
    document.body.style.overflow = '';
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
