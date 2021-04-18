import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
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
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
