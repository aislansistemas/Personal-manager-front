import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../core/user-auth/user-auth-service';

@Component({
  selector: 'app-control-point',
  templateUrl: './control.point.component.html',
  styleUrls: ['./control.point.component.scss']
})
export class ControlPointComponent implements OnInit {
  userName: string;
  role: string;

  constructor(private userAuthService:UserAuthService) { }

  ngOnInit(): void {
    this.userName = this.userAuthService.getUserName();
    this.role = this.userAuthService.getUserRole();

  }

}
