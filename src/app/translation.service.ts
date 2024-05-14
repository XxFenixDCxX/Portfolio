import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: string = 'es';
  private translations: any = {};

  constructor() {
    this.loadTranslations(this.currentLanguage);
  }

  private async loadTranslations(language: string) {
    const response = await fetch(`./assets/locales/${language}.json`);
    this.translations = await response.json();
  }

  private detectAndSetLanguage() {
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'es', 'eu'];
    this.currentLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'es';
    this.loadTranslations(this.currentLanguage);
  }

  public setLanguage(language: string) {
    this.currentLanguage = language;
    this.loadTranslations(language);
  }

  public translate(key: string): string {
    return this.translations[key] || key;
  }
}
