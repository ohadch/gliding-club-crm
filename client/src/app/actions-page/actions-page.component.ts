import { Component, OnInit } from '@angular/core';
import { ActionsService } from "../shared/services/actions.service";
import { GetActions_actions } from "../shared/graphql/types/GetActions";

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.css', '../../shared.css']
})
export class ActionsPageComponent implements OnInit {

  page: number = 1
  year: number = new Date().getFullYear()
  actions: GetActions_actions[] = []

  constructor(
    private actionsService: ActionsService
  ) { }

  pageUpdated(page: number) {
    this.page = page;
    this.reloadActions()
  }

  ngOnInit(): void {
    this.reloadActions()
  }


  private reloadActions() {
    this.actionsService.getByYear(this.year, this.page).subscribe(({ data }) => {
      this.actions = [...data.actions].sort((a, b) => a.date > b.date ? 1 : -1);
    })
  }

}
