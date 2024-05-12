import { Injectable } from '@angular/core';
import { Octokit } from "@octokit/core";
import { AppConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor() { }
  octokit: Octokit = new Octokit({
    auth: AppConfig.githubToken
  });

  async getFavoriteRepos() {
    try {
      const response = await this.octokit.request('GET /users/{username}/starred', {
        username: 'XxFenixDCxX'
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
