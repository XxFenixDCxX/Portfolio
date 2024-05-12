import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrollTop: boolean = true;
  isMobileView: boolean = false;
  showMobileMenu:boolean = false;
  activeSection: string = "home";
  stringTextoFooter: string = "- CONTINÚA, ";
  stringEnlaceFooter: string = "QUIERO VER MÁS -";

  constructor() {}

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 640px)');
      if (!mediaQuery.matches) {
        this.isScrollTop = false;
        this.isMobileView = true;
      } else {
        this.isScrollTop = true;
        this.isMobileView = false;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(!this.showMobileMenu){
      this.isScrollTop = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) === 0;

      const aboutComponent = document.querySelector('app-about');
      const homeComponent = document.querySelector('app-home');

      if (aboutComponent && homeComponent) {
        const aboutComponentPosition = aboutComponent.getBoundingClientRect();
        const homeComponentPosition = homeComponent.getBoundingClientRect();

        if (aboutComponentPosition.top <= 0 && aboutComponentPosition.bottom > 0) {
          this.activeSection = 'about';
        } else if (homeComponentPosition.top <= 0 && homeComponentPosition.bottom > 0) {
          this.activeSection = 'home';
        }
      }
    }
  }

  toggleMobileMenu() {
    this.showMobileMenu = this.showMobileMenu ? false : true;
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !this.showMobileMenu) {
      mobileMenu.addEventListener('animationend', () => {
        if (!this.showMobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      });
    } else if(mobileMenu){
      mobileMenu.classList.remove('hidden');
    }
  }

  scrollTo(toWhat : string) {
    if(this.isMobileView){
      this.showMobileMenu = false;
    }
    if (toWhat === 'about') {
      const aboutSection = document.getElementById('aboutSection');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (toWhat === 'home') {
      const homeSection = document.getElementById('homeSection');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
