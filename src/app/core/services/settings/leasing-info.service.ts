import { Injectable } from '@angular/core';
import { LeasingInfo } from '../../schema/leasing-info.model';
import { ReplaySubject } from 'rxjs';

const LEASING_INFO_KEY = 'leasingInfo';

@Injectable()
export class LeasingInfoService {
  private readonly leasingInfoSubject = new ReplaySubject<LeasingInfo>(1);
  readonly leasingInfo$ = this.leasingInfoSubject.asObservable();

  constructor() {
    const leasingInfo = this.getLeasingInfo();
    if (leasingInfo) {
      this.leasingInfoSubject.next(leasingInfo);
    }
  }

  saveLeasingInfo = (leasingInfo: LeasingInfo) => {
    localStorage.setItem(LEASING_INFO_KEY, JSON.stringify(leasingInfo));
    this.leasingInfoSubject.next(leasingInfo);
  };

  getLeasingInfo = (): LeasingInfo | null =>
    localStorage.getItem(LEASING_INFO_KEY)
      ? JSON.parse(localStorage.getItem(LEASING_INFO_KEY)!)
      : null;
}
