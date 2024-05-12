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
