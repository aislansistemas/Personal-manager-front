import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPointCreateComponent } from './control-point-create/control-point-create.component';
import { ControlPointDashboardComponent } from './control-point-dashboard/control-point-dashboard.component';
import { ControlPointListComponent } from './control-point-list/control-point-list.component';
import { ControlPointComponent } from './control.point.component';

const routes: Routes = [
    { 
        path: '',
        component: ControlPointComponent,
        children: [
            { 
                path: '',
                component: ControlPointDashboardComponent
            }, 
            {
                path: 'control-points',
                component: ControlPointListComponent
            },
            { 
                path: 'create',
                component: ControlPointCreateComponent
            },            
        ]
    },              
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class ControlPointRoutingModule { }