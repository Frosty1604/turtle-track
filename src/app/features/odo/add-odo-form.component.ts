import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OdoService } from '../../core/services/odo/odo.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { KmInputDirective } from '../../core/directives/km-input.directive';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

@Component({
  selector: 'tu-add-odo-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, KmInputDirective, FastSvgComponent],
  templateUrl: './add-odo-form.component.html',
  host: {
    class: 'block m-4',
  },
})
export class AddOdoFormComponent {
  readonly #odoService = inject(OdoService);

  readonly increaseValues = [50, 100, 250, 500];

  readonly form = viewChild.required<NgForm>('form');

  readonly latestOdoEntry = toSignal(this.#odoService.findMax());

  readonly odometer = linkedSignal(() => this.latestOdoEntry()?.odo ?? 0);

  readonly showReset = computed(
    () => this.odometer() !== this.latestOdoEntry()?.odo,
  );

  readonly submitted = output<void>();

  readonly canceled = output<void>();

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

    await this.#odoService.save(this.odometer()!);
    this.submitted.emit();
  }

  resetOdo() {
    this.odometer.set(this.latestOdoEntry()?.odo ?? 0);
  }
}
