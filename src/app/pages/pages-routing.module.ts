import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./post-image/post-image.module').then((m) => m.PostImageModule),
      },
      {
        path: 'post-by-modal',
        loadChildren: () =>
          import('./post-by-modal/post-by-modal.module').then((m) => m.PostByModalModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
