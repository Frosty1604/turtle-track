import { Directive, inject, OnInit } from '@angular/core';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';

@Directive({
  selector: 'input[tuKmInput]',
  hostDirectives: [
    {
      directive: MaskitoDirective,
    },
  ],
})
export class KmInputDirective implements OnInit {
  private readonly maskitoDirective = inject(MaskitoDirective);

  ngOnInit() {
    this.maskitoDirective.options = maskitoNumberOptionsGenerator({
      decimalSeparator: ',',
      thousandSeparator: '.',
      maximumFractionDigits: 2,
    });
  }
}
