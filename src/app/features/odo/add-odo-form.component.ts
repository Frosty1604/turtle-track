import {
  ChangeDetectionStrategy,
  Component,
  inject,
  linkedSignal,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OdoService } from '../../core/services/odo/odo.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { KmInputDirective } from '../../core/directives/km-input.directive';

@Component({
  selector: 'tu-add-odo-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, KmInputDirective],
  templateUrl: './add-odo-form.component.html',
  host: {
    class: 'block m-4',
  },
})
export class AddOdoFormComponent {
  readonly increaseValues = [50, 100, 250, 500, 1000];

  readonly #odoService = inject(OdoService);

  readonly form = viewChild.required<NgForm>('form');

  readonly latestOdoEntry = toSignal(this.#odoService.findMax());

  readonly odometer = linkedSignal(() => {
    return this.latestOdoEntry()?.odo ?? 0;
  });

  readonly submitted = output();

  readonly canceled = output();

  increaseODO(amount: number) {
    this.odometer.update((currentValue) => (currentValue ?? 0) + amount);
  }

  cancel() {
    this.canceled.emit();
  }

  async submit() {
    if (this.form().invalid) {
      console.warn('Invalid form');
      return;
    }

    await this.#odoService.insert(this.odometer()!);
    this.submitted.emit();
  }
}
