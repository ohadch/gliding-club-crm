import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { GetRoles_roles } from "../../graphql/types/GetRoles";
import _ from "lodash";

@Component({
  selector: 'app-role-load-distribution-chart',
  templateUrl: './role-load-distribution-chart.component.html',
  styleUrls: ['./role-load-distribution-chart.component.css']
})
export class RoleLoadDistributionChartComponent implements OnInit {

  @Input() role!: GetRoles_roles;

  constructor(
    public translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  public async labels() {
    const values = await this.dataset()
    return values.map(item => item.memberName)
  }

  public async data() {
    const values = await this.dataset()
    return values.map(item => ({ name: item.memberName, value: item.duties.length }))
  }

  private async dataset() {
    const unassigned = await this.translate.get('UNASSIGNED').toPromise()
    return _(this.role.duties)
      .groupBy(x => x.member?.fullName || unassigned)
      .map((value, key) => ({ memberName: key, duties: value }))
      .value();
  }

}
