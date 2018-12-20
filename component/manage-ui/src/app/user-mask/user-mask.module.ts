import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMaskMainComponent } from './user-mask-main/user-mask-main.component';
import { UserMaskRoutes } from './user-mask.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserMaskRoutes,
    FormsModule
  ],
  declarations: [UserMaskMainComponent]
})
export class UserMaskModule { }
