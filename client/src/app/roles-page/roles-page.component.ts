import { Component, OnInit } from '@angular/core';
import { RolesService } from "../shared/services/roles.service";
import { GetRoles_roles } from "../shared/graphql/types/GetRoles";

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.css']
})
export class RolesPageComponent implements OnInit {

  roles: GetRoles_roles[] = []

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit(): void {
    this.rolesService.getAll().subscribe(({ data }) => {
      this.roles = [...data.roles].sort((a, b) => a.id > b.id ? 1 : -1)
    })
  }

}
