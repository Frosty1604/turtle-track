import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DateValidatorDirective } from '../../core/directives/date-validator.directive';
import { convertToHtmlInputDate } from '../../utils/date.utils';
import { LeasingInfo } from '../../core/schema/leasing-info.model';
import { LeasingInfoService } from '../../core/services/settings/leasing-info.service';

@Component({
  selector: 'tu-leasing-info',
  templateUrl: './leasing-info.component.html',
  imports: [FormsModule, DateValidatorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeasingInfoComponent {
  private readonly leasingInfoService = inject(LeasingInfoService);

  readonly form = viewChild.required<NgForm>('form');

  readonly leasingInfo = signal(this.leasingInfoService.getLeasingInfo());

  readonly yearlyKmLimit = signal<number | undefined>(
    this.leasingInfo()?.yearlyKmLimit
  );

  readonly initialOdo = signal<number | undefined>(
    this.leasingInfo()?.initialOdo
  );
  readonly startDate = signal<string | null>(
    convertToHtmlInputDate(this.leasingInfo()?.startDate)
  );

  readonly submitted = output();
  readonly canceled = output();

  submit() {
    if (this.form().invalid) {
      console.log('Invalid form');
      console.log(this.form().errors);
      return;
    }
    const leasingInfo = {
      yearlyKmLimit: this.yearlyKmLimit()!,
      initialOdo: this.initialOdo()!,
      startDate: new Date(this.startDate()!).toISOString(),
    } as LeasingInfo;
    this.leasingInfoService.saveLeasingInfo(leasingInfo);
    this.submitted.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}
