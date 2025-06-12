import { inject, Injectable } from '@angular/core';
import { LeasingInfo } from '../../schema/leasing-info.model';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
} from 'rxjs';
import { LeasingInfoService } from '../settings/leasing-info.service';
import { OdoService } from '../odo/odo.service';

export interface AnalyticsData {
  isDistanceOverExpected: boolean;
  differenceFromExpected: number;
  idleDaysToReachExpectedKm: number;
  expectedOdo: number;
}

@Injectable()
export class AnalyticsService {
  readonly #leasingInfoService = inject(LeasingInfoService);
  readonly #odoService = inject(OdoService);

  readonly analyticsData$ = combineLatest([
    this.#odoService.findMax().pipe(filter((entry) => !!entry?.odo)),
    this.#leasingInfoService.leasingInfo$,
  ]).pipe(
    distinctUntilChanged(
      ([prevOdo, prevLeasingInfo], [currentOdo, currentLeasingInfo]) =>
        prevOdo?.odo === currentOdo?.odo &&
        JSON.stringify(prevLeasingInfo) === JSON.stringify(currentLeasingInfo),
    ),
    map(([odo, leasingInfo]) =>
      this.generateAnalyticsData(odo!.odo, leasingInfo),
    ),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  private generateAnalyticsData(
    currentOdo: number,
    leasingInfo: LeasingInfo,
  ): AnalyticsData {
    const dailyKmLimit = leasingInfo.yearlyKmLimit / 365;

    const daysSinceStart = Math.floor(
      (Date.now() - new Date(leasingInfo.startDate).getTime()) /
        (1000 * 3600 * 24),
    );

    const drivenDistance = currentOdo - leasingInfo.initialOdo;

    const drivenDistancePerDay = drivenDistance / daysSinceStart;

    const isDistanceOverExpected = drivenDistancePerDay > dailyKmLimit;

    const totalExpectedDistance = dailyKmLimit * daysSinceStart;

    const differenceFromExpected = Math.ceil(
      Math.abs(currentOdo - (leasingInfo.initialOdo + totalExpectedDistance)),
    );
    const idleDaysToReachExpectedKm = Math.ceil(
      differenceFromExpected / dailyKmLimit,
    );

    const expectedOdo =
      leasingInfo.initialOdo + Math.ceil(dailyKmLimit * daysSinceStart);
    return {
      isDistanceOverExpected,
      differenceFromExpected,
      idleDaysToReachExpectedKm,
      expectedOdo,
    };
  }
}
