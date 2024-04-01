import { Routes } from "@angular/router";
import ReleaseDashboardComponent from "../release-dashboard/release-dashboard.component";
import ReleaseCreateComponent from "../release-create/release-create.component";

export default [
  {
    // path: 'dashboard',
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => ReleaseDashboardComponent
      },
      {
        path: 'create',
        loadComponent: () => ReleaseCreateComponent
      },
      {
        path: 'edit/:releaseId',
        loadComponent: () => ReleaseCreateComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
] as Routes;
