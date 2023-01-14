import {TranslateService} from '@ngx-translate/core';
import {Component, OnInit} from '@angular/core';
import {DutiesService} from "../shared/services/duties.service";
import {GetDuties_duties} from "../shared/graphql/types/GetDuties";
import {ShiftType} from "../../types/graphql-global-types";

@Component({
  selector: 'app-duties-page',
  templateUrl: './duties-page.component.html',
  styleUrls: ['./duties-page.component.css', '../../shared.css']
})
export class DutiesPageComponent implements OnInit {

  page: number = 1
  duties: GetDuties_duties[] = []

  constructor(
    private dutiesService: DutiesService,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.reloadDuties()
  }

  pageUpdated(page: number) {
    this.page = page;
    this.reloadDuties()
  }

  async unassignAllDuties() {
    const confirmText = await this.translate.get('CONFIRM_UNASSIGNMENT_OF_ALL_DUTIES').toPromise()
    const alertText = this.translate.get('UNASSIGNMENT_PROCESS_FINISHED_SUCCESSFULLY').toPromise()
    if (!confirm(confirmText)) {
      return
    }

    this.dutiesService.unassignAllDuties().subscribe(({ data }) => {
      if (data) {
        alert(alertText)
        this.reloadDuties()
      }
    })
  }

  async assignSingleUnassignedDuties() {
    const confirmText = await this.translate.get('CONFIRM_SINGLE_ASSIGNMENT_ATTEMPT').toPromise()
    const alertText = this.translate.get('UNASSIGNMENT_PROCESS_FINISHED_SUCCESSFULLY').toPromise()

    if (!confirm(confirmText)) {
      return
    }

    this.dutiesService.assignSingleUnassignedDuty().subscribe(({ data }) => {
      if (data) {
        alert(alertText)
        this.reloadDuties()
      }
    })
  }

  async assignUnassignedDuties() {
    const confirmText = await this.translate.get('CONFIRM_ASSIGNMENT_PROCESS_START').toPromise()
    const alertText = this.translate.get('UNASSIGNMENT_PROCESS_FINISHED_SUCCESSFULLY').toPromise()

    if (!confirm(confirmText)) {
      return
    }

    this.dutiesService.assignAllUnassignedDuties().subscribe(({ data }) => {
      if (data) {
        alert(alertText)
        this.reloadDuties()
      }
    })
  }


  private reloadDuties() {
    this.dutiesService.getAll(this.page).subscribe(({ data }) => {
      this.duties = [...data.duties].sort((a, b) => a.shift?.action.date > b.shift?.action.date
        ? 1
        : a.shift?.action.date === b.shift?.action.date
          ? a.shift?.type === ShiftType.Noon ? 1 : -1 : -1
      )
    })
  }
}
