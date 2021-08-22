import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from 'src/app/common/criteria/call/call.component';
import { EmailComponent } from 'src/app/common/criteria/email/email.component';
import { MeetComponent } from 'src/app/common/criteria/meet/meet.component';
import { NotesComponent } from 'src/app/common/criteria/notes/notes.component';
import { TaskComponent } from 'src/app/common/criteria/task/task.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openCallLog() {
    const modalRef = this.modalService.open(CallComponent);

  }
  openEmailLog() {
    const modalRef = this.modalService.open(EmailComponent);

  }
  openMeetLog() {
    const modalRef = this.modalService.open(MeetComponent);

  }
  openNotes() {
    const modalRef = this.modalService.open(NotesComponent);

  }
  openTask() {
    const modalRef = this.modalService.open(TaskComponent);

  }


}
