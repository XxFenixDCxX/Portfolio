import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showMobileMenu:boolean = false;

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
