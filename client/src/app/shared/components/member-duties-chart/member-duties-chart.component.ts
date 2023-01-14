import {Component, Input, OnInit} from '@angular/core';
import _ from "lodash";
import {GetMember_member_duties} from "../../graphql/types/GetMember";

@Component({
  selector: 'app-member-duties-chart',
  templateUrl: './member-duties-chart.component.html',
  styleUrls: ['./member-duties-chart.component.css']
})
export class MemberDutiesChartComponent implements OnInit {

  @Input() duties!: GetMember_member_duties[]

  constructor() { }

  ngOnInit(): void {
  }

  public get labels() {
    return this.dataset.map(item => item.name)
  }

  public get data() {
    return this.dataset.map(item => ({name: item.name, value: item.duties.length}))
  }

  private get dataset() {
    return _(this.duties)
      .groupBy(x => x.role.name)
      .map((value, key) => ({name: key, duties: value}))
      .value();
  }

}
