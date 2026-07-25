import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FocusSectionComponent } from '../../components/focus-section/focus-section.component';
import { SelectedWorkComponent } from '../../components/selected-work/selected-work.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeroSectionComponent, FocusSectionComponent, SelectedWorkComponent, FooterSectionComponent],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {}
