import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'tu-empty-odo-state',
  template: `<div class="hero bg-base-200 rounded-box py-8">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-3xl font-bold">No ODO Entries Yet</h1>
        <p class="py-6">
          It looks like you haven't added any odometer entries. Click the button
          below to add your first entry!
        </p>
        <button class="btn btn-primary" (click)="addEntryClicked.emit()">
          Add ODO Entry
        </button>
      </div>
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyOdoStateComponent {
  readonly addEntryClicked = output<void>();
}