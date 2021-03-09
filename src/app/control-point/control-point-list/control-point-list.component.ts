import { Component, OnInit } from '@angular/core';
import { ControlPointService } from 'src/app/Services/control-point.service';
import { ControlPoint } from '../../Models/ControlPoint';
import { UserAuthService } from '../../core/user-auth/user-auth-service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-control-point-list',
  templateUrl: './control-point-list.component.html',
  styleUrls: ['./control-point-list.component.scss']
})
export class ControlPointListComponent implements OnInit {

  controlPoints: ControlPoint[];
  constructor(
    private controlPointService: ControlPointService,
    private userAuthService: UserAuthService
  ) { }

  ngOnInit(): void {
    this.controlPointService
    .getControlPoints(this.userAuthService.getUserId())
    .subscribe(
      dados => {
        console.log(dados);
        this.controlPoints = dados;
    },
      err => {
        console.log(err.error);
    });
  }

  printTimer(time: Time): string {
    return time.hours + ":" + time.minutes;
  }

}
