import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {TabViewModule} from 'primeng/tabview';
import { CustomersComponent } from './customers/customers/customers.component';
import { ContactInfoComponent } from './customers/contact-info/contact-info.component';
import {DragDropModule} from 'primeng/dragdrop';
import { ContactDetailComponent } from './customers/contact-detail/contact-detail.component';
import {SplitterModule} from 'primeng/splitter';
import {AccordionModule} from 'primeng/accordion';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { EmailComponent } from './common/criteria/email/email.component';
import { TaskComponent } from './common/criteria/task/task.component';
import { CallComponent } from './common/criteria/call/call.component';
import { NotesComponent } from './common/criteria/notes/notes.component';
import { MeetComponent } from './common/criteria/meet/meet.component';
@NgModule({
  declarations: [
    AppComponent,
    NgPrimeComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent,
    ContactInfoComponent,
    ContactDetailComponent,
    CustomerDetailComponent,
    EmailComponent,
    TaskComponent,
    CallComponent,
    NotesComponent,
    MeetComponent
  ],
  imports: [
    BrowserModule,
     TableModule,
    TreeTableModule,
    AccordionModule,
    ToastModule,
    SplitterModule,
    DragDropModule,
    DialogModule,
    TabViewModule,
    ButtonModule,
    MultiSelectModule,
    InputTextModule,
    ContextMenuModule,
    AppRoutingModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
