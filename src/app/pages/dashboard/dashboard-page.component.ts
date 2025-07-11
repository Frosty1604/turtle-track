import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { OdoService } from '../../core/services/odo/odo.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LeasingInfoService } from '../../core/services/settings/leasing-info.service';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { AddOdoFormComponent } from '../../features/odo/add-odo-form.component';
import { LeasingContractComponent } from '../../features/leasing/leasing-contract/leasing-contract.component';
import {
  AnalyticsData,
  AnalyticsService,
} from '../../core/services/analytics/analytics.service';
import { LeasingChartComponent } from '../../features/leasing/leasing-chart/leasing-chart.component';
import { SummaryComponent } from '../../features/summary/summary.component';
import { EmptyOdoStateComponent } from '../../features/empty-odo-state/empty-odo-state.component';

@Component({
  selector: 'tu-dashboard-page',
  imports: [
    FastSvgComponent,
    AddOdoFormComponent,
    LeasingContractComponent,
    LeasingChartComponent,
    SummaryComponent,
    EmptyOdoStateComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard-page.component.html',
  providers: [OdoService, LeasingInfoService, AnalyticsService],
})
export default class DashboardPageComponent {
  readonly modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  readonly dialogComponent = signal<null | 'add' | 'leasingContract'>(null);

  readonly #leasingInfoService = inject(LeasingInfoService);
  readonly #odoService = inject(OdoService);
  readonly #analyticsService = inject(AnalyticsService);

  readonly entries = toSignal(this.#odoService.findAll(), { initialValue: [] });

  readonly leasingInfo = toSignal(this.#leasingInfoService.leasingInfo$);

  readonly latestOdoEntry = toSignal(this.#odoService.findMax());

  readonly analyticsData = toSignal<AnalyticsData, AnalyticsData>(
    this.#analyticsService.analyticsData$,
    {
      initialValue: {
        differenceFromExpected: 0,
        expectedOdo: 0,
        idleDaysToReachExpectedKm: 0,
        isDistanceOverExpected: false,
      },
    },
  );

  openEntryModal() {
    this.modal().nativeElement.showModal();
    this.dialogComponent.set('add');
  }

  openLeasingInfoModal() {
    this.modal().nativeElement.showModal();
    this.dialogComponent.set('leasingContract');
  }

  leasingInfoSaved() {
    this.closeModal();
  }

  closeModal() {
    // todo show toast message
    this.modal().nativeElement.close();
    this.dialogComponent.set(null);
  }
}
