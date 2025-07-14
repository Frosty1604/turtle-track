import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { injectLocalStorage } from 'ngxtension/inject-local-storage';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = injectLocalStorage<Theme>('theme', {
    defaultValue: 'dark',
  });

  readonly theme = this._theme.asReadonly();

  private onThemeChange = effect(() => {
    this.document.documentElement.setAttribute('data-theme', this._theme());
  });

  setTheme(theme: Theme) {
    this._theme.set(theme);
  }
}
