import { DOCUMENT, effect, inject, Injectable } from '@angular/core';
import { injectLocalStorage } from 'ngxtension/inject-local-storage';

export type Theme = 'light' | 'dark';

@Injectable()
export class ThemeService {
  readonly #document = inject(DOCUMENT);

  readonly _theme = injectLocalStorage<Theme>('theme', {
    defaultValue: 'dark',
  });

  readonly theme = this._theme.asReadonly();

  // eslint-disable-next-line no-unused-private-class-members
  #onThemeChange = effect(() => {
    this.#document.documentElement.setAttribute('data-theme', this._theme());
  });

  setTheme(theme: Theme) {
    this._theme.set(theme);
  }
}
