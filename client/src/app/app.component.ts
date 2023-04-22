import { Component, ViewChild } from '@angular/core';
import { GetActions_actions } from "./shared/graphql/types/GetActions";
import { MatSidenav } from "@angular/material/sidenav";

export interface IActionSelectionDialogData {
  action: GetActions_actions | undefined
}

interface IMenuItem {
  name: string;
  icon: string;
  to: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;

  menuItems: IMenuItem[] = [
    { name: 'ACTION_DAYS', icon: "event", to: "/actions" },
    { name: 'SHIFTS', icon: "space_dashboard", to: "/shifts" },
    { name: 'DUTIES', icon: "calendar_view_month", to: "/duties" },
    { name: 'MEMBERS', icon: "person", to: "/members" },
    { name: 'ROLES', icon: "manage_accounts", to: "/roles" },
    { name: 'MEMBER_PREFERENCES', icon: "settings", to: "/member-preferences" },
    { name: 'GLIDERS', icon: "airplanemode_active", to: "/gliders" },
  ]

  constructor(
  ) {
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
