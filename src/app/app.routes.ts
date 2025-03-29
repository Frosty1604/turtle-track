import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard-page.component'),
  },
];
