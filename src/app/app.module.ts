import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For ngModel
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { AppComponent } from './app.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';

// Define your routes
const routes: Routes = [
  // { path: '', component: HomeComponent }, // Example route
  // { path: 'order', component: OrderEntryComponent } // Example route
];

@NgModule({
  declarations: [
    AppComponent,
    OrderEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure RouterModule with routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

