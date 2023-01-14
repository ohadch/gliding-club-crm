import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShiftsPageShiftsTableComponent} from "./shifts-page-shifts-table/shifts-page-shifts-table.component";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatChipsModule} from "@angular/material/chips";
import {ShiftsPageComponent} from "./shifts-page.component";
import {MatIconModule} from "@angular/material/icon";
import {UnassignedDutiesPipe} from "../shared/pipes/unassigned-duties.pipe";
import {SharedModule} from "../shared/shared.module";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ShiftsPageComponent,
    ShiftsPageShiftsTableComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [
    UnassignedDutiesPipe
  ]
})
export class ShiftsPageModule { }
