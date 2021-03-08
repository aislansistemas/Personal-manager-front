import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-alert-feedback.html'
})
export class ModalAlertFeedBack {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}