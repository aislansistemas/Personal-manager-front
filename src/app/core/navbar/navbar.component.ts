import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth/user-auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus: any;
  public listTitles: any[];
  public location: Location;
  userName: string;
  constructor(
    location: Location, 
    private element: ElementRef,
    private router: Router,
    private userAuthService: UserAuthService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.userName = this.userAuthService.getUserName();
  }
  
  getTitle(){
    /*var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';*/
  }

}
