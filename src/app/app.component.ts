import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, AboutComponent, ProyectsComponent, KnowledgeComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private translator:TranslationService) {}

  ngOnInit(): void {
      this.translator.detectAndSetLanguage();
  }
}
