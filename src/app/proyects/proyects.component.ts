import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent implements OnInit{
  repos: any[] = [];
  reposErro: boolean = false;

  constructor(private gitHubService: GitHubService, private translator: TranslationService) { }

  ngOnInit(): void {
    this.gitHubService.getFavoriteRepos().then((repos) => {
      this.repos = repos.sort((a:any, b:any) => {
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
    }).catch(() => {
        this.reposErro = true;
    });
  }

  reloadPage() {
    window.location.reload();
  }

  isMobile() {
    return window.innerWidth <= 825;
  }


  translate(key: string): string {
    return this.translator.translate(key);
  }
}
