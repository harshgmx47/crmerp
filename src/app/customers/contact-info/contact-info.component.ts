import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from 'src/app/common/criteria/call/call.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  customersinfo: any[] = [];
  columns: string[] = [];
  selectedColumns: string[] = [];
  dragedColumn: string | null = null;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.columns = ['Name', 'Email', 'PhoneNumber'];
    this.selectedColumns = ['Address'];
    this.customersinfo = [
      { name: 'Kevin Peterson', email: 'kev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'John Sinha', email: 'jc@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Oly Pop', email: 'olyop@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Davis Marsh', email: 'dev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Kevin Peterson', email: 'kev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'John Sinha', email: 'jc@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Oly Pop', email: 'olyop@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Davis Marsh', email: 'dev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Kevin Peterson', email: 'kev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'John Sinha', email: 'jc@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Oly Pop', email: 'olyop@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Davis Marsh', email: 'dev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Kevin Peterson', email: 'kev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'John Sinha', email: 'jc@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Oly Pop', email: 'olyop@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
      { name: 'Davis Marsh', email: 'dev@gmail.com', number: '609-456-4762', state: 'NJ', city: 'Newark' },
    ];
  }



  dragStart(e: any, c: any) {
    this.dragedColumn = c;
  }
  reversedragStart(e: any, c: any) {
    this.dragedColumn = c;
  }
  dragEnd(e: any) {
  }

  drop(e: any) {
    if (this.dragedColumn) {
      this.selectedColumns.push(this.dragedColumn);
      const index = this.columns.indexOf(this.dragedColumn, 0);
      if (index > -1) {
        this.columns.splice(index, 1);
      }
      this.dragedColumn = null;
    }
  }
  reversedrop(e: any) {
    if (this.dragedColumn) {
      this.columns.push(this.dragedColumn);
      const index = this.selectedColumns.indexOf(this.dragedColumn, 0);
      if (index > -1) {
        this.selectedColumns.splice(index, 1);
      }
      this.dragedColumn = null;
    }
  }
  open(content: any) {
    this.modalService.open(content).result.then((result) => {
    });
  }

}
