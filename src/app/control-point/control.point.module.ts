import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPointListComponent } from './control-point-list/control-point-list.component';
import { ControlPointCreateComponent } from './control-point-create/control-point-create.component';
import { ControlPointComponent } from './control.point.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { ControlPointRoutingModule } from './control.point.routing.module';
import { CoreModule } from '../core/core.module';
import { ControlPointDashboardComponent } from './control-point-dashboard/control-point-dashboard.component';
import { ControlPointService } from '../Services/control-point.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ControlPointListComponent,
    ControlPointCreateComponent,
    ControlPointComponent,
    ControlPointDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    ControlPointRoutingModule,
    CoreModule
  ],
  providers: [
    ControlPointService, 
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: "BRL"
    }
  ]
})
export class ControlPointModule { }
