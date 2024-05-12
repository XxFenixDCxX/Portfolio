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
