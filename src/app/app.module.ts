import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component'
import { NavBarComponent } from './nav/navbar.component';
import { EventThumnailComponent } from './events/event-thumnail.component';
import { EventService } from './events/shared/event.service'
import { CalcService } from './calculator/calculator.service'
import { ToastrService} from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CalculatorComponent} from './calculator/calculator.component'
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

 @NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService,CalcService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
