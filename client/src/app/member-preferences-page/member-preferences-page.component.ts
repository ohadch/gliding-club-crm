import { Component, OnInit } from '@angular/core';
import { GetMemberPreferences_memberPreferences } from "../shared/graphql/types/GetMemberPreferences";
import { MemberPreferencesService } from "../shared/services/member-preferences.service";
import { MatDialog } from "@angular/material/dialog";
import { CreateMemberPreferenceDialogComponent } from "../shared/components/create-member-preference-dialog/create-member-preference-dialog.component";

@Component({
  selector: 'app-member-preferences-page',
  templateUrl: './member-preferences-page.component.html',
  styleUrls: ['./member-preferences-page.component.css', "../../shared.css"]
})
export class MemberPreferencesPageComponent implements OnInit {

  preferences: GetMemberPreferences_memberPreferences[] = []

  constructor(
    private memberPreferencesService: MemberPreferencesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.reloadMemberPreferences()
  }

  onMemberPreferenceDeleted(preferenceId: number) {
    this.memberPreferencesService.delete(preferenceId).subscribe(subscriber => this.reloadMemberPreferences())
  }

  openCreateMemberPreferenceDialog(): void {
    const dialogRef = this.dialog.open(CreateMemberPreferenceDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(() => {
      this.reloadMemberPreferences()
    });
  }

  private reloadMemberPreferences() {
    this.memberPreferencesService.getAll().subscribe(({ data }) => {
      this.preferences = data.memberPreferences
    })
  }


}
