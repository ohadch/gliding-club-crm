import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MembersService} from "../../services/members.service";
import {FormControl} from "@angular/forms";
import {GetMembers_members} from "../../graphql/types/GetMembers";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-members-autocomplete',
  templateUrl: './members-autocomplete.component.html',
  styleUrls: ['./members-autocomplete.component.css']
})
export class MembersAutocompleteComponent implements OnInit {
  @Output() selected = new EventEmitter<GetMembers_members>();

  members: GetMembers_members[] = []
  member = new FormControl();
  filteredMembers!: Observable<GetMembers_members[]>;

  constructor(
    private membersService: MembersService
  ) { }

  async ngOnInit() {
    this.members  = await this.membersService.getAll()
    this.filteredMembers = this.member.valueChanges.pipe(
      startWith(""),
      map(value => this._filterMember(value))
    );
  }

  onSelected(event: MatAutocompleteSelectedEvent) {
    this.selected.emit(event.option.value)
  }

  private _filterMember(value: string | GetMembers_members) {
    let filterValue = typeof value === "string"
      ? value
      : value.fullName

    return this.members.filter(
      member => member.fullName.includes(filterValue)
    );
  }

  memberDisplayFn = (member: GetMembers_members | undefined) => {
    return member ? member.fullName : ""
  }

}
