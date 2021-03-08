import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserAuthService } from 'src/app/core/user-auth/user-auth-service';
import { UserAccount } from 'src/app/Models/UserAccount';
import { UserAccountService } from 'src/app/Services/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  alertError: string = "";
  hasError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userAccountService: UserAccountService,
    private userAuthService: UserAuthService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passwordHash: ['',  Validators.required]
    });
  }

  login():void {
    if(this.loginForm.valid && !this.loginForm.pending) {
      this.runSpinner(true);
      var userAccount = this.loginForm.getRawValue() as UserAccount;

      this.userAccountService.login(userAccount)
      .subscribe(
        dados => {
          this.userAuthService.saveToken(this.getMensage(dados));
          this.runSpinner(false);
          this.router.navigate(['/control-point']);
        },
        err => {
          this.runSpinner(false);
          this.displayError(err.error);
        }
      );
    }
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

  displayError(error: string) {
    this.alertError = error;
    this.hasError = true;
    this.loginForm.reset();
    setTimeout(() => {
      this.alertError = "";
      this.hasError = false;
    }, 7000);
  }

}
