import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostImageComponent } from './post-image.component';

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
  ],
})
export class PostImageModule {}
