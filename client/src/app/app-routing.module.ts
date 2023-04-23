import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MembersPageComponent} from "./members-page/members-page.component";
import {ShiftsPageComponent} from "./shifts-page/shifts-page.component";
import {DutiesPageComponent} from "./duties-page/duties-page.component";
import {RolesPageComponent} from "./roles-page/roles-page.component";
import {MemberPreferencesPageComponent} from "./member-preferences-page/member-preferences-page.component";
import {ActionsPageComponent} from "./actions-page/actions-page.component";
import {MemberDetailsPageComponent} from "./member-details-page/member-details-page.component";
import {GlidersPageComponent} from "./gliders-page/gliders-page.component";
import {
  GliderReservationQueuePageComponent
} from "./glider-reservation-queue-page/glider-reservation-queue-page.component";

const routes: Routes = [
  {path: "actions", component: ActionsPageComponent},
  {path: "members", component: MembersPageComponent},
  {path: "members/:id", component: MemberDetailsPageComponent},
  {path: "gliders", component: GlidersPageComponent},
  {path: "shifts", component: ShiftsPageComponent},
  {path: "duties", component: DutiesPageComponent},
  {path: "roles", component: RolesPageComponent},
  {path: "member-preferences", component: MemberPreferencesPageComponent},
  {path: "glider-reservation-queue", component: GliderReservationQueuePageComponent},
  {path: '', redirectTo: '/actions', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
