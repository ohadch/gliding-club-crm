import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { MATERIAL_SANITY_CHECKS } from "@angular/material/core";
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { CommonModule } from "@angular/common";
import { RolesPageModule } from "./roles-page/roles-page.module";
import { HomePageModule } from "./home-page/home-page.module";
import { MembersPageModule } from "./members-page/members-page.module";
import { ActionsPageModule } from "./actions-page/actions-page.module";
import { DutiesPageModule } from "./duties-page/duties-page.module";
import { ShiftsPageModule } from "./shifts-page/shifts-page.module";
import { MemberPreferencesPageModule } from "./member-preferences-page/member-preferences-page.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MemberDetailsPageModule } from "./member-details-page/member-details-page.module";
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    StoreModule.forRoot({}, {}),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ActionsPageModule,
    DutiesPageModule,
    HomePageModule,
    MemberPreferencesPageModule,
    MembersPageModule,
    RolesPageModule,
    ShiftsPageModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MemberDetailsPageModule,
    AuthModule.forRoot({
      domain: 'dev-wpwqa405.us.auth0.com',
      clientId: 'G7qfITfJuYqeBPhmwgZ3ugB9rGVi4lHD',
      audience: 'http://localhost',
      // Specify configuration for the interceptor.
      httpInterceptor: {
        allowedList: [
          { uri: 'http://localhost:4000/*' }
        ]
      }
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'he',
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => new TranslateHttpLoader(httpClient),
        deps: [HttpClient]
      },
    }),
  ],
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    },
    // Auth0 interceptor provider (adds auth header to backend http calls).
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }