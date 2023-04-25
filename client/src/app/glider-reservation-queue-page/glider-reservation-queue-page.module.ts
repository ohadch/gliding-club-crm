import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GliderReservationQueuePageComponent } from './glider-reservation-queue-page.component';
import { SpacingGroupMembersListComponent } from './spacing-group-members-list/spacing-group-members-list.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    GliderReservationQueuePageComponent,
    SpacingGroupMembersListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ]
})
export class GliderReservationQueuePageModule { }
