import { Injectable } from '@angular/core';
import { Octokit } from "@octokit/core";

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  octokit: Octokit = new Octokit({
    auth: "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"
  });

  async getFavoriteRepos() {
    try {
      const response = await this.octokit.request('GET /users/{username}/starred', {
        username: 'XxFenixDCxX'
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener los repositorios favoritos:", error);
      throw error;
    }
  }
}
