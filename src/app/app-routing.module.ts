import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CalculatorComponent} from './calculator/calculator.component'

const routes: Routes = [
  {path:'events/new' , component : EventsListComponent},
  {path:'calc' , component : CalculatorComponent},
  {path:'events' , component : EventsListComponent},
  {path:'events/:id', component : EventDetailsComponent},
  {path:'', redirectTo : '/events' , pathMatch :'full'} //Default if pattern not match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
