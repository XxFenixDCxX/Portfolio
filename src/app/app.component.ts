import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ProyectsComponent, KnowledgeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
