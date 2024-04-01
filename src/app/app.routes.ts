import { Routes } from '@angular/router';
import releaseShellRoutes from './release/features/release-shell/release-shell.routes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => releaseShellRoutes
  },
  {
    path: '**',
    redirectTo: ''
  }
];
