import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OdoService } from '../../services/odo/odo.service';

@Component({
  selector: 'tu-add-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
  template: ` <form
    (ngSubmit)="submit()"
    #form="ngForm"
    class="flex items-center justify-center flex-col"
  >
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">ODO</span>
        <span class="label-text">km</span>
      </div>
      <input
        type="number"
        [(ngModel)]="odometer"
        name="odometer"
        required
        class="input input-bordered w-full"
      />
    </label>
    <div class="mt-4 flex flex-row items-center justify-end w-full gap-2">
      <button (click)="cancel()" type="button" class="btn btn-ghost">
        Cancel
      </button>
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>`,
  host: {
    class: 'block m-4',
  },
})
export class AddEntryComponent {
  readonly #odoService = inject(OdoService);

  readonly form = viewChild.required<NgForm>('form');

  readonly odometer = signal<number | null>(null);

  readonly submitted = output();
  readonly canceled = output();

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
