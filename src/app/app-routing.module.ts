import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"booking", component: BookingComponent},
  {path:"services", component: ServicesComponent},
  {path: '', redirectTo: "booking", pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
