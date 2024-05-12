import { Injectable } from '@angular/core';
import { Octokit } from "@octokit/core";

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  octokit: Octokit = new Octokit({
    auth: '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'
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
