import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import {
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';
import { AnalyticsData } from '../../services/analytics/analytics.service';
import { ApexXAxis } from 'ng-apexcharts/lib/model/apex-types';
import { OdoService } from '../../services/odo/odo.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, tap } from 'rxjs';
import { LeasingInfoService } from '../../services/settings/leasing-info.service';

@Component({
  selector: 'tu-leasing-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (series(); as series) {
    <apx-chart
      [series]="series"
      [chart]="chart()"
      [dataLabels]="dataLabels()"
      [stroke]="stroke()"
      [xaxis]="xaxis()"
      [tooltip]="tooltip()"
      [grid]="grid()"
    />
    }
  `,
  imports: [ChartComponent],
})
export class LeasingChartComponent {
  readonly analyticsData = input.required<AnalyticsData>();

  readonly #odoService = inject(OdoService);
  readonly #leasingService = inject(LeasingInfoService);

  readonly seriesActual = toSignal(
    combineLatest([
      this.#leasingService.leasingInfo$,
      this.#odoService.findMax(),
    ]).pipe(
      map(([leasingInfo, maxOdo]) => ({
        data: [leasingInfo.initialOdo, maxOdo!.odo],
        name: 'actual',
      })),
      tap((value) => console.log('', value))
    ),
    { initialValue: { data: [], name: 'actual' } }
  );
  readonly seriesExpected = computed(() => {
    return {
      data: [
        this.#leasingService.getLeasingInfo()!.initialOdo!,
        this.analyticsData().expectedOdo,
      ],
      name: 'expected',
    };
  });
  readonly series = computed(() => [
    this.seriesActual(),
    this.seriesExpected(),
  ]);
  chart = signal<ApexChart>({
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false,
    },
  });
  dataLabels = signal<ApexDataLabels>({
    enabled: false,
  });

  stroke = signal<ApexStroke>({
    curve: 'straight',
  });

  readonly categories = toSignal(
    combineLatest([
      this.#leasingService.leasingInfo$,
      this.#odoService.findMax(),
    ]).pipe(
      map(([leasingInfo, maxOdo]) => [
        new Date(leasingInfo.startDate).toISOString(),
        maxOdo!.dateTime,
      ]),
      tap((value) => console.log('cats', value))
    )
  );

  readonly xaxis = computed<ApexXAxis>(() => ({
    type: 'datetime',
    categories: this.categories(),
    labels: {
      show: false,
    },
    axisBorder: {
      show: true,
      color: '#FFFFFF',
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  }));

  grid = signal<ApexGrid>({
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  });

  tooltip = signal<ApexTooltip>({
    enabled: false,
  });
}
