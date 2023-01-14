import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {
  CreateOrUpdateMemberDialogComponent,
  ICreateOrUpdateMemberDialogData
} from "../shared/components/create-or-update-member-dialog/create-or-update-member-dialog.component";
import { GetMember_member } from "../shared/graphql/types/GetMember";
import { MembersService } from "../shared/services/members.service";

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css', "../../shared.css"]
})
export class MembersPageComponent implements OnInit {

  page: number = 1
  members: GetMember_member[] = []

  constructor(
    private membersService: MembersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.reloadMembers()
  }

  openCreateOrUpdateMemberDialog(): void {
    const dialogRef = this.dialog.open(CreateOrUpdateMemberDialogComponent, {
      data: {
        memberId: undefined
      },
    });

    dialogRef.afterClosed().subscribe((result: ICreateOrUpdateMemberDialogData) => {
      this.reloadMembers()
    });
  }

  private reloadMembers() {
    this.membersService.getByPage(this.page).valueChanges.subscribe(({ data }) => {
      console.log({members: data.members})
      this.members = data.members
    })
  }

  pageUpdated(page: number) {
    this.page = page;
    this.reloadMembers()
  }

}
