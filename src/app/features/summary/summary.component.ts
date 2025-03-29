import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountUpDirective } from '../../core/directives/count-up.directive';

@Component({
  selector: 'tu-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="stats stats-vertical md:stats-horizontal shadow-xl bg-base-200 w-full"
    >
      <div class="stat max-md:place-items-center">
        <div class="stat-title">Total</div>
        <div
          class="stat-value text-primary"
          [countUp]="totalKm()"
          [duration]="1500"
          suffix="km"
        ></div>
        <div class="stat-desc">21% more than last month</div>
      </div>
      <div class="stat max-md:place-items-center">
        <div class="stat-title">Difference</div>
        <div
          class="stat-value text-accent"
          [countUp]="difference()"
          [duration]="2000"
          suffix="km"
        ></div>
        <div class="stat-desc">21% more than last month</div>
      </div>
      <div class="stat max-md:place-items-center">
        <div
          class="stat-value"
          [countUp]="differenceInDays()"
          suffix="Days"
        ></div>
        <div class="stat-title text-secondary">Ahead</div>
        <div class="stat-desc">You're doing great so far!</div>
      </div>
    </div>
  `,
  host: {
    class: 'w-full block',
  },
  imports: [CountUpDirective],
})
export class SummaryComponent {
  readonly totalKm = input.required<number>();
  readonly difference = input.required<number>();
  readonly differenceInDays = input.required<number>();
}
