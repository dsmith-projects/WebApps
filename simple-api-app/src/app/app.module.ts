import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes, Router } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ApiModuleComponent } from './api-module/api-module.component';
import { ResultModuleComponent } from './result-module/result-module.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavMenuItemComponent } from './nav-menu/nav-menu-item.component';

import { NavDetails } from './nav.model';
import { LandingComponent } from './landing/landing.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './employee/employee.model';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const details: NavDetails[] = [
  {label: 'Home', name: 'Root', path: '', component: LandingComponent},
  {label: 'Simple API App', name: 'SimpleApp', path: 'simple-app', component: ApiModuleComponent},
  {label: 'API pagination', name: 'Pagination', path: 'pagination', component: PaginationComponent}
];

const routes: Routes = [
  {path: '', component: LandingComponent, pathMatch: 'full'},
  {path: 'simple-app', component: ApiModuleComponent, pathMatch: 'full'},
  {path: 'pagination', component: PaginationComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ApiModuleComponent,
    ResultModuleComponent,
    NavMenuComponent,
    NavMenuItemComponent,
    LandingComponent,
    PaginationComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
  ],
  providers: [
    {provide: APP_BASE_HREF,    useValue: '/'},
    {provide: LocationStrategy,    useClass: HashLocationStrategy},
    {provide: 'NavDetails',    useValue: details}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
