import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './theme.service';

@Component({
  selector: 'tu-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label class="btn btn-circle swap swap-rotate">
      <input type="checkbox" [(ngModel)]="isLight" (click)="toggleTheme()" />
      <svg
        class="swap-off size-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 3v1m0 16v1m-8-9H3m3.314-5.686L5.5 5.5m12.186.814L18.5 5.5M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        />
      </svg>
      <svg
        class="swap-on size-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M13 6V3m5.5 9V7m-4-2.5h-3m9.5 5h-5m-.445 7.315a8.3 8.3 0 0 0 3.445-.74A8.37 8.37 0 1 1 7.925 5a8.37 8.37 0 0 0 7.63 11.815"
        />
      </svg>
    </label>
  `,
  imports: [FormsModule],
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);

  readonly isLight = signal(this.themeService.theme() === 'light');

  readonly toggleTheme = () => {
    this.themeService.setTheme(this.isLight() ? 'dark' : 'light');
  };
}

