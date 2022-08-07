import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LoginComponent } from './registration/login/login.component';
import { ForgetpasswordComponent } from './registration/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './registration/resetpassword/resetpassword.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthInterceptor } from './registration/interceptor/AuthInterceptor';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './registration/signup/signup.component';
import { CanLoginGuard } from './registration/can-login.guard';
import { ActivecompteComponent } from './activecompte/activecompte.component';


import {MatSliderModule} from "@angular/material/slider";
import {NiveauAddComponent} from "./components/niveau/niveau-add/niveau-add.component";
import {ExerciceAddComponent} from "./components/exercice/exercice-add/exercice-add.component";
import {ExerciceAddFileComponent} from "./components/exercice/exercice-add-file/exercice-add-file.component";
import {NiveauShowComponent} from "./components/niveau/niveau-show/niveau-show.component";
import {ExerciceShowComponent} from "./components/exercice/exercice-show/exercice-show.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatTreeModule} from "@angular/material/tree";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";




//import { ActivecompteComponent } from './activecompte/activecompte.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]
const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, LoginComponent, ForgetpasswordComponent, ResetpasswordComponent, AccueilComponent,SignupComponent, ActivecompteComponent, NiveauAddComponent,
  NiveauShowComponent,
  ExerciceAddComponent,
  ExerciceShowComponent,
  ExerciceAddFileComponent],
imports:[
  BrowserModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatButtonModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
  MatSortModule,
  MatSliderModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatTreeModule,
    TableModule,
    MatPaginatorModule

    ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
      
    },
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    },

    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    CanLoginGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
