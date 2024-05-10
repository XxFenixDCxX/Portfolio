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
  stringTextoFooter: string = "- CONTINÚA, ";
  stringEnlaceFooter: string = "QUIERO VER MÁS -";

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
      if (this.isScrollTop){
        this.stringTextoFooter = "- CONTINÚA, ";
        this.stringEnlaceFooter = "QUIERO VER MÁS -";
      } else {
        this.stringTextoFooter = "- SUBIR AL ";
        this.stringEnlaceFooter = "INICIO -";
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
}
