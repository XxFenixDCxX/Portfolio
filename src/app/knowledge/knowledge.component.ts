import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  knowledges = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'SASS', percentage: 70 },
    { name: 'JavaScript', percentage: 65 },
    { name: 'TypeScript', percentage: 80 },
    { name: 'JQuery', percentage: 70 },
    { name: 'Ajax', percentage: 60 },
    { name: 'Bootstrap', percentage: 55 },
    { name: 'Bulma', percentage: 70 },
    { name: 'Tailwind', percentage: 40 },
    { name: 'Angular', percentage: 80 },
    { name: 'Ionic', percentage: 50 },
    { name: 'Python', percentage: 70 },
    { name: 'C#', percentage: 70 },
    { name: '.NET Core', percentage: 70 },
    { name: 'Entity', percentage: 80 },
    { name: 'T-SQL', percentage: 70 },
    { name: 'MySQL', percentage: 70 },
    { name: 'PHP', percentage: 65 },
    { name: 'Symfony', percentage: 75 },
    { name: 'Android Studio', percentage: 90 },
    { name: 'Odoo', percentage: 60 },
    { name: 'GitHub', percentage: 70 },
    { name: 'Git', percentage: 70 },
    { name: 'Azure DevOps', percentage: 45 },
    { name: 'NUnit', percentage: 60 },
  ];

}
