import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    this.customers = [
      { name: 'johnson co. ltd.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'1',contacts:[{}] },
      { name: 'Vishu Pvt ltd', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'10',contacts:[{}] },
      { name: 'misc pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'5',contacts:[{}] },
      { name: 'Corry Pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'11',contacts:[{}] },
      { name: 'Silly Pharama', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'12',contacts:[{}] },
      { name: 'johnson co. ltd.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'1',contacts:[{}] },
      { name: 'Vishu Pvt ltd', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'10',contacts:[{}] },
      { name: 'misc pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'5',contacts:[{}] },
      { name: 'Corry Pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'11',contacts:[{}] },
      { name: 'Silly Pharama', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'12',contacts:[{}] },
      { name: 'johnson co. ltd.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'1',contacts:[{}] },
      { name: 'Vishu Pvt ltd', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'10',contacts:[{}] },
      { name: 'misc pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'5',contacts:[{}] },
      { name: 'Corry Pharama.',  number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'11',contacts:[{}] },
      { name: 'Silly Pharama', number: '609-456-4762',  state: 'NJ',city:'Newark',numberOfContact:'12',contacts:[{}] },
  ];
  }
  open(content:any) {
    this.modalService.open(content).result.then((result) => {
    });
  }
}
