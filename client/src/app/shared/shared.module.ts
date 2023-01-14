import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringToDatePipe } from './pipes/string-to-date.pipe';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { AssignedDutiesPipe } from './pipes/assigned-duties.pipe';
import { UnassignedDutiesPipe } from './pipes/unassigned-duties.pipe';
import { ShiftNamePipe } from './pipes/shift-name.pipe';
import { ActionNamePipe } from './pipes/action-name.pipe';
import { DutyNamePipe } from './pipes/duty-name.pipe';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CreateShiftDialogComponent } from "./components/create-shift-dialog/create-shift-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CreateOrUpdateMemberDialogComponent } from "./components/create-or-update-member-dialog/create-or-update-member-dialog.component";
import { MatChipsModule } from "@angular/material/chips";
import { RoleLoadDistributionChartComponent } from "./components/role-load-distribution-chart/role-load-distribution-chart.component";
import { CreateMemberPreferenceDialogComponent } from "./components/create-member-preference-dialog/create-member-preference-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MemberDutiesChartComponent } from "./components/member-duties-chart/member-duties-chart.component";
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationButtonsComponent } from './components/pagination-buttons/pagination-buttons.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MembersAutocompleteComponent } from './components/members-autocomplete/members-autocomplete.component';

@NgModule({
  declarations: [
    CreateOrUpdateMemberDialogComponent,
    CreateShiftDialogComponent,
    CreateMemberPreferenceDialogComponent,
    StringToDatePipe,
    MaterialElevationDirective,
    AssignedDutiesPipe,
    UnassignedDutiesPipe,
    ShiftNamePipe,
    ActionNamePipe,
    DutyNamePipe,
    RoleLoadDistributionChartComponent,
    MemberDutiesChartComponent,
    AuthButtonComponent,
    PaginationButtonsComponent,
    MembersAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    NgxChartsModule,
    TranslateModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    StringToDatePipe,
    MaterialElevationDirective,
    AssignedDutiesPipe,
    UnassignedDutiesPipe,
    ShiftNamePipe,
    ActionNamePipe,
    DutyNamePipe,
    RoleLoadDistributionChartComponent,
    MemberDutiesChartComponent,
    AuthButtonComponent,
    TranslateModule,
    PaginationButtonsComponent,
  ],
})
export class SharedModule { }
