import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'tu-root',
  template: ` <div class="container mx-auto h-full relative">
    <router-outlet />
  </div>`,
})
export class AppComponent {}
