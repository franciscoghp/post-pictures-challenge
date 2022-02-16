import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostByModalComponent } from './post-by-modal.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PostByModalComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbNavModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostByModalComponent,
      },
    ]),
  ],
})
export class PostByModalModule {}
