import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembersPageComponent} from "./members-page/members-page.component";
import {ShiftsPageComponent} from "./shifts-page/shifts-page.component";
import {DutiesPageComponent} from "./duties-page/duties-page.component";
import {RolesPageComponent} from "./roles-page/roles-page.component";
import {MemberPreferencesPageComponent} from "./member-preferences-page/member-preferences-page.component";
import {ActionsPageComponent} from "./actions-page/actions-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MemberDetailsPageComponent} from "./member-details-page/member-details-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "actions", component: ActionsPageComponent },
  { path: "members", component: MembersPageComponent },
  { path: "members/:id", component: MemberDetailsPageComponent },
  { path: "shifts", component: ShiftsPageComponent },
  { path: "duties", component: DutiesPageComponent },
  { path: "roles", component: RolesPageComponent },
  { path: "member-preferences", component: MemberPreferencesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
