import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => import('./pages/home-page/home-page.component'),
  },
  {
    path: 'notes/:id',

    loadComponent: async () => import('./pages/note-page/note-page.component'),
  },
];
