import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActivecompteComponent } from './activecompte/activecompte.component';


import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './registration/login/login.component';
import { SignupComponent } from './registration/signup/signup.component';
import { CanLoginGuard } from "./registration/can-login.guard";



import {NiveauShowComponent} from "./components/niveau/niveau-show/niveau-show.component";
import {NiveauAddComponent} from "./components/niveau/niveau-add/niveau-add.component";
import {ExerciceAddComponent} from "./components/exercice/exercice-add/exercice-add.component";
import {ExerciceAddFileComponent} from "./components/exercice/exercice-add-file/exercice-add-file.component";
import {ExerciceShowComponent} from "./components/exercice/exercice-show/exercice-show.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'niveau/add',
        component: NiveauAddComponent
      },
      {
        path: 'niveau/show',
        component: NiveauShowComponent
      },
      {
        path: 'exercice/add',
        component: ExerciceAddComponent
      },
      {
        path: 'exercice/add/file',
        component:ExerciceAddFileComponent
      },
      {
        path: 'exercice/show',
        component: ExerciceShowComponent
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule),canActivate: [CanLoginGuard]
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),canActivate: [CanLoginGuard]
      },

    ]
  },

  //{path: '**', redirectTo: 'dashboard'},
 // {path:"acceuil",redirectTo:'active'},
  {path:"login",component:LoginComponent},

  {path:"accueil",component:AccueilComponent},
  {path:"signup",component:SignupComponent},
  {path:"active",component:ActivecompteComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
