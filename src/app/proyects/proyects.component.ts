import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';
import { CommonModule } from '@angular/common';

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

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.gitHubService.getFavoriteRepos().then((repos) => {
      this.repos = repos.sort((a:any, b:any) => {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
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
}
