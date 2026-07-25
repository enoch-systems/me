import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  protected readonly user = {
    name: 'Oliver Bennet',
    username: '@oliver',
    tagline: 'Designers focused on creating impactful, user-centered digital experiences and branding.',
    bio: `I'm an active member of various crypto-based services, contributing to decentralized finance and blockchain innovation. With a passion for emerging technologies, he supports projects focused on secure and transparent digital transactions. His work helps bridge traditional finance with the future of cryptocurrency.`
  };
}