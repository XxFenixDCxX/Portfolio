import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ProyectsComponent, KnowledgeComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {}

  @HostListener('contextmenu', ['$event'])
  @HostListener('keydown.F12', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('fixed', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'bg-red-100', 'text-red-600', 'px-4', 'py-2', 'border', 'border-red-400', 'rounded', 'shadow-md', 'z-50');
    alertDiv.innerHTML = '<strong>¡Oops!</strong> La inspección del código está deshabilitada.';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 2000);
  }
}
