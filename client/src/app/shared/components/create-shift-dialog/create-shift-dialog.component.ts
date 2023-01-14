import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, OnInit } from '@angular/core';
import { CreateOrUpdateMemberDialogComponent } from "../create-or-update-member-dialog/create-or-update-member-dialog.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl } from "@angular/forms";
import { ShiftsService } from "../../services/shifts.service";
import { GetShiftTypes_shiftTypes } from "../../graphql/types/GetShiftTypes";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { GetActions_actions } from "../../graphql/types/GetActions";
import { ActionNamePipe } from "../../pipes/action-name.pipe";
import { ActionsService } from "../../services/actions.service";

export interface ICreateShiftDialogData {
  shiftId: number | undefined
}

@Component({
  selector: 'app-create-shift-dialog',
  templateUrl: './create-shift-dialog.component.html',
  styleUrls: ['./create-shift-dialog.component.css', "../../../../shared.css"]
})
export class CreateShiftDialogComponent implements OnInit {

  actions: GetActions_actions[] = []
  action = new FormControl();
  filteredActions!: Observable<GetActions_actions[]>;

  shiftTypes: string[] = []
  shiftType = new FormControl();
  filteredShiftTypes!: Observable<string[]>;

  constructor(
    private actionNamePipe: ActionNamePipe,
    private actionsService: ActionsService,
    private shiftsService: ShiftsService,
    public dialogRef: MatDialogRef<CreateOrUpdateMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICreateShiftDialogData,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    const year = new Date().getFullYear()
    this.shiftTypes = ["MORNING", "NOON"]


    this.filteredShiftTypes = this.shiftType.valueChanges.pipe(
      startWith(""),
      map(value => this._filterShiftType(value))
    );

    this.actionsService.getByYear(year, 1).subscribe(({ data }) => {
      this.actions = [...data.actions].sort((a, b) => a.date > b.date ? 1 : -1)


      this.filteredActions = this.action.valueChanges.pipe(
        startWith(""),
        map(value => this._filterAction(value))
      );
    })
  }

  public async title() {
    return this.translate.get('ADD_SHIFT').toPromise()
  }

  async confirm() {
    if (this.data.shiftId) {
      console.log('not implemented')
    } else {
      this.shiftsService.create({
        type: this.shiftType.value,
        actionId: this.action.value.id
      }).subscribe(subscriber => {
        if (subscriber.data) {
          this.dialogRef.close()
        }
      })
    }
  }


  public get isValid() {
    return Boolean(this.shiftType.value) && Boolean(this.action.value)
  }

  public shiftTypeDisplayFn = (shiftType: GetShiftTypes_shiftTypes | undefined) => {
    return shiftType ? shiftType.name : ""
  }

  public actionDisplayFn = (action: GetActions_actions | undefined) => {
    return action ? this.actionNamePipe.transform(action) : ""
  }


  private _filterShiftType(value: string) {
    let filterValue = value

    return this.shiftTypes.filter(
      shiftType => shiftType.includes(filterValue)
    );
  }


  private _filterAction(value: string | GetActions_actions) {
    let filterValue = typeof value === "string"
      ? value
      : this.actionNamePipe.transform(value)

    return this.actions
      .filter(
        action => this.actionNamePipe.transform(action).includes(filterValue)
      );
  }


}
