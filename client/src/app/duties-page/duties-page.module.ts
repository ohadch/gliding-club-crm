import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutiesPageDutiesTableComponent } from "./duties-page-duties-table/duties-page-duties-table.component";
import { DutiesPageComponent } from "./duties-page.component";
import { ShiftNamePipe } from "../shared/pipes/shift-name.pipe";
import { MatTableModule } from "@angular/material/table";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    DutiesPageComponent,
    DutiesPageDutiesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    MatButtonModule,
  ],
  providers: [
    ShiftNamePipe
  ]
})
export class DutiesPageModule { }
