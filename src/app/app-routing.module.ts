import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './customers/contact-detail/contact-detail.component';
import { ContactInfoComponent } from './customers/contact-info/contact-info.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgPrimeComponent } from './ng-prime/ng-prime.component';

const routes: Routes = [
  { path: 'prime-ng', component: NgPrimeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'contact-list', component: ContactInfoComponent },
  { path: 'contact-detail', component: ContactDetailComponent },
  { path: 'customer-detail', component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
