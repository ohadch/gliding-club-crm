import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberPreferencesPagePreferencesTableComponent} from "./member-preferences-page-preferences-table/member-preferences-page-preferences-table.component";
import {MemberPreferencesPageComponent} from "./member-preferences-page.component";
import {SharedModule} from "../shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MemberPreferencesPageComponent,
    MemberPreferencesPagePreferencesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MemberPreferencesPageModule { }
