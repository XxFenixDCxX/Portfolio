import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrollTop: boolean = true;
  isMobileView: boolean = false;
  showMobileMenu: boolean = false;
  activeSection: string = "home";
  showLanguageMenu: boolean = false;
  selectedLanguage = { img: '../../assets/img/es.png', alt: 'es' };
  languages = [
    { img: '../../assets/img/eu.png', alt: 'eu' },
    { img: '../../assets/img/en.png', alt: 'en' },
    { img: '../../assets/img/es.png', alt: 'es' }
  ];

  constructor(private translator: TranslationService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languages.find(language => language.alt === this.translator.getLanguage()) || this.selectedLanguage;
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 825px)');
      this.isMobileView = !mediaQuery.matches;
      this.isScrollTop = mediaQuery.matches;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.showMobileMenu) {
      const topMargin = 100;

      this.isScrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) === 0;

      const aboutComponent = document.querySelector('app-about');
      const homeComponent = document.querySelector('app-home');
      const proyectsSection = document.querySelector('app-proyects');
      const knowledgeComponent = document.querySelector('app-knowledge');
      const contactComponent = document.querySelector('app-contact');

      if (aboutComponent && homeComponent && proyectsSection && knowledgeComponent && contactComponent) {
        const aboutComponentPosition = aboutComponent.getBoundingClientRect();
        const homeComponentPosition = homeComponent.getBoundingClientRect();
        const proyectsSectionPosition = proyectsSection.getBoundingClientRect();
        const knowledgeComponentPosition = knowledgeComponent.getBoundingClientRect();
        const contactComponentPosition = contactComponent.getBoundingClientRect();

        if (aboutComponentPosition.top <= topMargin && aboutComponentPosition.bottom > topMargin) {
          this.activeSection = 'about';
        } else if (homeComponentPosition.top <= topMargin && homeComponentPosition.bottom > topMargin) {
          this.activeSection = 'home';
        } else if (proyectsSectionPosition.top <= topMargin && proyectsSectionPosition.bottom > topMargin) {
          this.activeSection = 'proyects';
        } else if (knowledgeComponentPosition.top <= topMargin && knowledgeComponentPosition.bottom > topMargin) {
          this.activeSection = 'knowledge';
        } else if (contactComponentPosition.top <= topMargin && contactComponentPosition.bottom > topMargin) {
          this.activeSection = 'contact';
        }
      }
    }
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      if (!this.showMobileMenu) {
        mobileMenu.addEventListener('animationend', () => {
          if (!this.showMobileMenu) {
            mobileMenu.classList.add('hidden');
          }
        });
      } else {
        mobileMenu.classList.remove('hidden');
      }
    }
  }

  scrollTo(toWhat: string) {
    const sections: { [key: string]: string } = {
      'about': 'aboutSection',
      'home': 'homeSection',
      'proyects': 'proyectsSection',
      'knowledge': 'knowledgeSection',
      'contact': 'contactSection'
    };

    const sectionId = sections[toWhat];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (this.isMobileView) {
      this.showMobileMenu = false;
    }
  }

  translate(key: string): string {
    return this.translator.translate(key);
  }

  toggleLanguageMenu() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  selectLanguage(language: { img: string, alt: string }) {
    if (this.isMobileView) {
      this.showMobileMenu = false;
    }
    this.selectedLanguage = language;
    this.showLanguageMenu = false;
    this.translator.setLanguage(language.alt);
  }
}
