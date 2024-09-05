import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderEntryComponent } from './order-entry/order-entry.component';

const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order', component: OrderEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

