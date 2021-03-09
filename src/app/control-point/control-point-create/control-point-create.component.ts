import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalAlertFeedBack } from 'src/app/core/moldal-alert-feed/modal-alert-feedback';
import { ControlPoint } from 'src/app/Models/ControlPoint';
import { ControlPointService } from 'src/app/Services/control-point.service';
import { UserAuthService } from '../../core/user-auth/user-auth-service';

@Component({
  selector: 'app-control-point-create',
  templateUrl: './control-point-create.component.html',
  styleUrls: ['./control-point-create.component.scss']
})
export class ControlPointCreateComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private controlPointService: ControlPointService,
    private userAuthService: UserAuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      hourInputOne: [''],
      hourExitOne: [''],
      hourInputTwo: [''],
      hourExitTwo: ['']
    });
  }

  registerControlPoint() {
    this.runSpinner(true);
    var controlPoint = this.registerForm.getRawValue() as ControlPoint;
    controlPoint.applicationUserId = this.userAuthService.getUserId();
    console.log(controlPoint);
    this.controlPointService
    .createControlPoint(controlPoint)
    .subscribe(
      result => {
        const modalRef = this.modalService.open(ModalAlertFeedBack);
          modalRef.componentInstance.name = this.getMensage(result);
          this.runSpinner(false);
          this.router.navigate(['/control-point/control-points']);
      },
      err => {
        this.runSpinner(false);
        console.log(err.error);
      }
    );
  }

  getMensage(dados:any){
    return dados.mensage;
  }

  runSpinner(executar: boolean): void{
    if(executar){
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }
}
