import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
} from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { AnalyticsData } from '../../core/services/analytics/analytics.service';
import { OdoService } from '../../core/services/odo/odo.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { LeasingInfoService } from '../../core/services/settings/leasing-info.service';
import { defaultChartOptions } from './default-chart-options';

@Component({
  selector: 'tu-leasing-chart',
  imports: [ChartComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (chartState(); as state) {
    <apx-chart
      [series]="state.series!"
      [chart]="state.chart!"
      [dataLabels]="state.dataLabels!"
      [stroke]="state.stroke!"
      [xaxis]="state.xaxis!"
      [tooltip]="state.tooltip!"
      [grid]="state.grid!"
      [legend]="state.legend!"
      [yaxis]="state.yaxis!"
      [colors]="state.colors!"
    />
    }
  `,
  host: {
    class: 'block shadow-xl bg-base-200 rounded-2xl',
  },
})
export class LeasingChartComponent {
  readonly analyticsData = input.required<AnalyticsData>();

  readonly #odoService = inject(OdoService);
  readonly #leasingService = inject(LeasingInfoService);

  readonly chartState: Signal<ApexOptions | null> = computed(() => {
    const data = this.series();
    if (!data?.series) {
      return null;
    }
    return {
      ...defaultChartOptions,
      series: data.series!,
      xaxis: {
        ...defaultChartOptions.xaxis,
        categories: data.categories,
      },
    };
  });

  readonly series = toSignal(
    combineLatest([
      this.#leasingService.leasingInfo$,
      this.#odoService.findMax(),
      toObservable(this.analyticsData),
    ]).pipe(
      map(([leasingInfo, currentOdo, analyticsData]) => ({
        series: [
          {
            data: [leasingInfo.initialOdo, currentOdo!.odo],
            name: 'Real',
          },
          {
            data: [leasingInfo.initialOdo, analyticsData.expectedOdo],
            name: 'Average',
          },
        ],
        categories: [
          new Date(leasingInfo.startDate).toISOString(),
          currentOdo!.dateTime,
        ],
      }))
    )
  );
}
