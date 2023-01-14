import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { GetMember_member } from "../../graphql/types/GetMember";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MembersService } from "../../services/members.service";
import { FormControl } from "@angular/forms";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { RolesService } from "../../services/roles.service";
import { GetRoles_roles } from "../../graphql/types/GetRoles";

export interface ICreateOrUpdateMemberDialogData {
  memberId: number | undefined
}

@Component({
  selector: 'app-create-or-update-member-dialog',
  templateUrl: './create-or-update-member-dialog.component.html',
  styleUrls: ['./create-or-update-member-dialog.component.css', "../../../../shared.css"]
})
export class CreateOrUpdateMemberDialogComponent implements OnInit {

  member: GetMember_member | undefined
  firstName = new FormControl("")
  lastName = new FormControl("")
  email = new FormControl("")

  separatorKeysCodes: number[] = [ENTER, COMMA];
  rolesCtrl = new FormControl();
  filteredRoles!: Observable<GetRoles_roles[]>;
  roles: GetRoles_roles[] = [];
  allRoles: GetRoles_roles[] = [];

  @ViewChild('rolesInput') roleInput!: ElementRef<HTMLInputElement>;

  constructor(
    private membersService: MembersService,
    private rolesService: RolesService,
    public dialogRef: MatDialogRef<CreateOrUpdateMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICreateOrUpdateMemberDialogData,
  ) {
  }

  public get isValid() {
    return Boolean(this.firstName.value && this.lastName.value && this.email.value)
  }

  ngOnInit(): void {
    const { memberId } = this.data
    if (memberId) {
      this.membersService
        .getOne(memberId)
        .subscribe(({ data, loading }) => {
          this.member = data.member
          this.firstName.setValue(data.member.firstName)
          this.lastName.setValue(data.member.lastName)
        })
    }


    this.rolesService
      .getAll()
      .subscribe(({ data, loading }) => {
        this.allRoles = [...data.roles]

        this.filteredRoles = this.rolesCtrl.valueChanges.pipe(
          startWith(null),
          map((role: string | null) => role
            ? this._filterRoles(role) : this.allRoles.filter(role => !this.roles.map(_role => _role.name).includes(role.name))));
      })


  }

  public get title() {
    return this.data.memberId ? "EDIT_MEMBER_DIALOG_TITLE" : "ADD_MEMBER"
  }

  async confirm() {
    if (this.data.memberId) {
      console.log('not implemented')
    } else {
      this.membersService.create({
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        qualificationIds: this.roles.map(role => role.id)
      }).subscribe(subscriber => {
        if (subscriber.data) {
          this.dialogRef.close()
        }
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addRole(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      const role = this.allRoles.find(role => role.name === value)
      if (role) {
        this.roles.push(role);
      }

    }

    // Clear the input value
    event.chipInput!.clear();

    this.rolesCtrl.setValue(null);
  }

  removeRole(role: GetRoles_roles): void {
    const index = this.roles.indexOf(role);

    if (index >= 0) {
      this.roles.splice(index, 1);
    }
  }

  selectedRole(event: MatAutocompleteSelectedEvent): void {
    const role = this.allRoles.find(role => role.name === event.option.viewValue)
    if (role) {
      this.roles.push(role);
    }

    this.rolesCtrl.setValue(null);
  }

  private _filterRoles(value: string): GetRoles_roles[] {
    return this.allRoles.filter(role => !this.roles.includes(role)).filter(role => role.name.includes(value));
  }


  roleDisplayFn(role: GetRoles_roles | null) {
    return role ? role.name : ""
  }
}
