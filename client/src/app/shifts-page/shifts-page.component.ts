import {TranslateService} from '@ngx-translate/core';
import {Component, OnInit} from '@angular/core';
import {
  CreateShiftDialogComponent,
  ICreateShiftDialogData
} from "../shared/components/create-shift-dialog/create-shift-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ShiftsService} from "../shared/services/shifts.service";
import {GetShifts_shifts} from "../shared/graphql/types/GetShifts";
import {ActionsService} from "../shared/services/actions.service";
import {ShiftType} from "../../types/graphql-global-types";

@Component({
  selector: 'app-shifts-page',
  templateUrl: './shifts-page.component.html',
  styleUrls: ['./shifts-page.component.css', "../../shared.css"]
})
export class ShiftsPageComponent implements OnInit {

  shifts: GetShifts_shifts[] = []
  page: number = 1

  constructor(
    private actionsService: ActionsService,
    private shiftsService: ShiftsService,
    public dialog: MatDialog,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.reloadShifts()
  }

  pageUpdated(page: number) {
    this.page = page;
    this.reloadShifts()
  }

  deleteShift(shiftId: number) {
    this.shiftsService.delete(shiftId).subscribe(subscriber => this.reloadShifts())
  }

  async automaticallyCreateShiftsForActions() {
    const alertText = await this.translate.get('SHIFTS_CREATION_PROCESS_FINISHED').toPromise()

    const year = new Date().getFullYear()
    this.actionsService.ensureShiftsForActions(year).subscribe(({ data }) => {
      if (data) {
        alert(alertText)
        this.reloadShifts()
      }
    })
  }

  openCreateShiftDialog(): void {
    const dialogRef = this.dialog.open(CreateShiftDialogComponent, {
      data: {
        shiftId: undefined
      },
    });

    dialogRef.afterClosed().subscribe((result: ICreateShiftDialogData) => {
      this.reloadShifts()
    });
  }


  private reloadShifts() {
    this.shiftsService.getAll(this.page).subscribe(({ data }) => {

      this.shifts = [...data.shifts].sort((a, b) => a.action.date > b.action.date
        ? 1
        : a.action.date === b.action.date
          ? a.type === ShiftType.Morning
            ? -1 : 1 : 1
      )
    })
  }
}
