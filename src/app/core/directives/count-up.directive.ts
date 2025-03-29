import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  animationFrameScheduler,
  combineLatest,
  distinctUntilChanged,
  endWith,
  interval,
  map,
  switchMap,
  takeWhile,
} from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Directive({ selector: '[countUp]' })
export class CountUpDirective implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  readonly countUp = input.required<number>();
  readonly duration = input(1000);
  readonly suffix = input('');

  private currentCount$ = combineLatest([
    toObservable(this.countUp),
    toObservable(this.duration),
  ]).pipe(
    switchMap(([count, duration]) => {
      const startTime = animationFrameScheduler.now();

      return interval(0, animationFrameScheduler).pipe(
        map(() => animationFrameScheduler.now() - startTime),
        map((elapsedTime) => elapsedTime / duration),
        takeWhile((progress) => progress <= 1),
        map((progress) => progress * (2 - progress)),
        map((progress) => Math.round(progress * count)),
        endWith(count),
        map((count) => Intl.NumberFormat('de-DE').format(count)),
        distinctUntilChanged(),
      );
    }),
  );

  ngOnInit() {
    this.displayCurrentCount();
  }

  private displayCurrentCount(): void {
    this.currentCount$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((count) => (this.suffix() ? count + ' ' + this.suffix() : count)),
      )
      .subscribe((currentCount) => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          currentCount,
        );
      });
  }
}
