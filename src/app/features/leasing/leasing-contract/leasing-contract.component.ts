import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DateValidatorDirective } from '../../../core/directives/date-validator.directive';
import { convertToHtmlInputDate } from '../../../utils/date.utils';
import { LeasingInfo } from '../../../core/schema/leasing-info.model';
import { LeasingInfoService } from '../../../core/services/settings/leasing-info.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { KmInputDirective } from '../../../core/directives/km-input.directive';

@Component({
  selector: 'tu-leasing-contract',
  templateUrl: './leasing-contract.component.html',
  imports: [FormsModule, DateValidatorDirective, KmInputDirective],
  styles: `
    input[type='date']::-webkit-calendar-picker-indicator {
      margin-left: 0.25em;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeasingContractComponent {
  private readonly leasingInfoService = inject(LeasingInfoService);

  readonly form = viewChild.required<NgForm>('form');

  readonly leasingInfo = toSignal(this.leasingInfoService.leasingInfo$);

  readonly yearlyKmLimit = signal<number | undefined>(
    this.leasingInfo()?.yearlyKmLimit,
  );

  readonly initialOdo = signal<number | undefined>(
    this.leasingInfo()?.initialOdo,
  );
  readonly startDate = signal<string | null>(
    convertToHtmlInputDate(this.leasingInfo()?.startDate),
  );

  readonly submitted = output<void>();
  readonly canceled = output<void>();

  submit() {
    if (this.form().invalid) {
      console.log('Invalid form');
      console.log(this.form().errors);
      return;
    }
    const leasingInfo = {
      yearlyKmLimit: Number(this.yearlyKmLimit()),
      initialOdo: Number(this.initialOdo()),
      startDate: new Date(this.startDate()!).toISOString(),
    } as LeasingInfo;
    this.leasingInfoService.save(leasingInfo);
    this.submitted.emit();
  }

  cancel() {
    this.canceled.emit();
  }
}
