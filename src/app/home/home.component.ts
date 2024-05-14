import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollToAbout() {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  constructor(private translator: TranslationService) {}

  translate(key: string): string {
    return this.translator.translate(key);
  }
}
