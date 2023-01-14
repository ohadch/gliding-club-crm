import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {RolesPageRolesTableComponent} from "./roles-page-roles-table/roles-page-roles-table.component";
import {RolesPageComponent} from "./roles-page.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    RolesPageComponent,
    RolesPageRolesTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    SharedModule
  ]
})
export class RolesPageModule { }
