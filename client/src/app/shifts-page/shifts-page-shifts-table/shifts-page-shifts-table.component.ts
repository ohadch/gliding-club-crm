import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetShifts_shifts } from "../../shared/graphql/types/GetShifts";

interface IRow {
  id: number,
  name: string,
  startAt: Date,
  assignedDuties: string,
  unassignedDuties: string,
}

@Component({
  selector: 'app-shifts-page-shifts-table',
  templateUrl: './shifts-page-shifts-table.component.html',
  styleUrls: ['./shifts-page-shifts-table.component.css']
})
export class ShiftsPageShiftsTableComponent implements OnInit {

  @Input() shifts!: GetShifts_shifts[];
  @Output() shiftDeletedEvent = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'name', 'assignedDuties', 'unassignedDuties', 'actions'];

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void { }

  async deleteShift(shift: IRow) {
    const confirmText = await this.translate.get('CONFIRM_SHIFT_DELETION').toPromise()

    if (!confirm(confirmText)) {
      return
    }

    this.shiftDeletedEvent.emit(shift.id)
  }

}
