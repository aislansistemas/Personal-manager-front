import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalAlertFeedBack } from 'src/app/core/moldal-alert-feed/modal-alert-feedback';
import { UserAccount } from 'src/app/Models/UserAccount';
import { UserAccountService } from 'src/app/Services/user-account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isNotAccepted: boolean = true;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  alertError: string = "";
  hasError: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userAccountService: UserAccountService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', 
          [
              Validators.required,
              Validators.email,
          ]
      ],
      passwordHash: ['', 
          [
              Validators.required,
              Validators.minLength(8)
          ]
      ]
    });
  }

  register():void {
    if(this.registerForm.valid && !this.registerForm.pending) {
      this.runSpinner(true);
      var userAccount = this.registerForm.getRawValue() as UserAccount;

      this.userAccountService.registerUser(userAccount)
      .subscribe(
        dados => {
          const modalRef = this.modalService.open(ModalAlertFeedBack);
          modalRef.componentInstance.name = this.getMensage(dados);
          this.runSpinner(false);
          this.router.navigate(['/']);
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

  enabledButtonSubmit(): void {
    if(this.emailInput.nativeElement.checked) {
      this.isNotAccepted = false;
    } else {
      this.isNotAccepted = true;
    }
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
    this.registerForm.reset();
    setTimeout(() => {
      this.alertError = "";
      this.hasError = false;
    }, 7000);
  }

}
