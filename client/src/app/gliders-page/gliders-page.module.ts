import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";
import {GlidersPageComponent} from "./gliders-page.component";
import {GlidersPageGlidersTableComponent} from "./gliders-page-gliders-table/gliders-page-gliders-table.component";



@NgModule({
  declarations: [
    GlidersPageComponent,
    GlidersPageGlidersTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    SharedModule
  ]
})
export class GlidersPageModule { }
