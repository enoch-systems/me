import { Component } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './app.html'
})
export class App {}
