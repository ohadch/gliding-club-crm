import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MembersPageMembersTableComponent} from "./members-page-members-table/members-page-members-table.component";
import {MembersPageComponent} from "./members-page.component";
import {MatIconModule} from "@angular/material/icon";
import {ShiftNamePipe} from "../shared/pipes/shift-name.pipe";
import {SharedModule} from "../shared/shared.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MembersPageComponent,
    MembersPageMembersTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    ShiftNamePipe
  ]
})
export class MembersPageModule { }
