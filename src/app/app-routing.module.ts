import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPointComponent } from './control-point/control.point.component';
import { AuthGuard } from './core/auth-guard/auth-guard';
import { UserRoleEnum } from './Enums/user-role-enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  { 
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'control-point',
    canActivate: [AuthGuard],
    data: {
      expectedRole: UserRoleEnum.getRoleMenber()
    },
    loadChildren: () => import('./control-point/control.point.module').then(c => c.ControlPointModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
