import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostImageComponent } from './post-image.component';
import { DashboardsModule } from '../../_metronic/partials/content/dashboards/dashboards.module';

@NgModule({
  declarations: [PostImageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostImageComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class PostImageModule {}
