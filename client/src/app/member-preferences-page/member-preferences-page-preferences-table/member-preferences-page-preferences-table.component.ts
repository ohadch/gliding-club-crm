import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetMemberPreferences_memberPreferences } from "../../shared/graphql/types/GetMemberPreferences";

@Component({
  selector: 'app-member-preferences-page-preferences-table',
  templateUrl: './member-preferences-page-preferences-table.component.html',
  styleUrls: ['./member-preferences-page-preferences-table.component.css']
})
export class MemberPreferencesPagePreferencesTableComponent implements OnInit {

  @Input() preferences!: GetMemberPreferences_memberPreferences[]
  @Output() preferenceDeletedEvent = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'member', 'type', 'otherMember', 'startDate', 'endDate', 'actions'];

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  public async deletePreference(preference: GetMemberPreferences_memberPreferences) {
    const confirmText = await this.translate.get('CONFIRM_PREFERENCE_DELETION').toPromise()
    if (!confirm(confirmText)) {
      return
    }

    this.preferenceDeletedEvent.emit(preference.id)
  }

  public get tableData() {
    return this.preferences
  }

}
