import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailsPageComponent } from './member-details-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    MemberDetailsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class MemberDetailsPageModule { }
