import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {GetMembers_members} from "../../graphql/types/GetMembers";
import {FormControl, FormGroup} from "@angular/forms";
import {MembersService} from "../../services/members.service";
import {map, startWith} from "rxjs/operators";
import {MatDialogRef} from "@angular/material/dialog";
import {GetShifts_shifts} from "../../graphql/types/GetShifts";
import {MemberPreferencesService} from "../../services/member-preferences.service";
import {ShiftNamePipe} from "../../pipes/shift-name.pipe";
import {UtilsService} from "../../services/utils.service";
import {MemberAssignmentPreferenceType} from "../../../../types/graphql-global-types";


@Component({
  selector: 'app-create-member-preference-dialog',
  templateUrl: './create-member-preference-dialog.component.html',
  styleUrls: ['./create-member-preference-dialog.component.css', "../../../../shared.css"]
})
export class CreateMemberPreferenceDialogComponent implements OnInit {
  member: GetMembers_members | undefined;
  otherMember: GetMembers_members | undefined;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  memberPreferenceTypes: MemberAssignmentPreferenceType[] = []
  memberPreferenceType = new FormControl();
  filteredMemberPreferenceTypes!: Observable<MemberAssignmentPreferenceType[]>;

  constructor(
    private utilsService: UtilsService,
    private shiftNamePipe: ShiftNamePipe,
    private memberPreferencesService: MemberPreferencesService,
    private membersService: MembersService,
    public dialogRef: MatDialogRef<CreateMemberPreferenceDialogComponent>,
  ) { }

  async ngOnInit() {
    this.memberPreferenceTypes = this.utilsService.enumStringValuesIterator(MemberAssignmentPreferenceType)
    this.filteredMemberPreferenceTypes = this.memberPreferenceType.valueChanges.pipe(
      startWith(""),
      map(value => this._filterMemberPreferenceType(value))
    );

  }

  onMemberSelected(member: GetMembers_members) {
    this.member = member
  }

  onOtherMemberSelected(otherMember: GetMembers_members) {
    this.otherMember = otherMember
  }

  private _filterMemberPreferenceType(value: string | MemberAssignmentPreferenceType) {
    return this.memberPreferenceTypes.filter(
      memberPreferenceType => memberPreferenceType.includes(value)
    );
  }

  confirm() {
    if (!this.member) {
      return
    }

    this.memberPreferencesService.create({
      memberId: this.member.id,
      otherMemberId: this.otherMember?.id,
      startDate: this.range.value.start,
      endDate: this.range.value.end,
      type: this.memberPreferenceType.value
    }).subscribe(subscriber => {
      if (subscriber.data) {
        this.dialogRef.close()
      }
    })
  }


  shiftDisplayFn = (shift: GetShifts_shifts | undefined) => {
    return shift ? this.shiftNamePipe.transform(shift) : ""
  }

  memberPreferenceTypeDisplayFn = (memberPreferenceType: MemberAssignmentPreferenceType | undefined) => {
    return memberPreferenceType ||  ""
  }

  public get isValid() {
    return Boolean(this.member)
  }

  public get renderDateRange() {
    const preferenceTypes: MemberAssignmentPreferenceType[] = [
      MemberAssignmentPreferenceType.Unavailable
    ]
    return preferenceTypes.includes(this.memberPreferenceType.value)
  }

  public get renderOtherMember() {
    const preferenceTypes: MemberAssignmentPreferenceType[] = [
      MemberAssignmentPreferenceType.BePositionedWithMember,
      MemberAssignmentPreferenceType.DoNotBePositionedWithMember,
    ]
    return preferenceTypes.includes(this.memberPreferenceType.value)
  }
}
