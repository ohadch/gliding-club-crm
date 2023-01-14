import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsPageActionsTableComponent } from "./actions-page-actions-table/actions-page-actions-table.component";
import { ActionsPageComponent } from "./actions-page.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    ActionsPageComponent,
    ActionsPageActionsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
  ]
})
export class ActionsPageModule { }
