import { Component, OnInit } from "@angular/core"
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'


@Component({
    selector : "events-list",
    template: `
    <div>
    <h1>Upcoming Events </h1>
    <hr/>
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
            <event-thumnail  [event] ="event" ></event-thumnail>
        </div>  
    </div>
    </div>
    `,
})

export class EventsListComponent implements OnInit{
    
    events : any[]
    constructor(private eventService : EventService,private toastr : ToastrService)
    {   

    }

    ngOnInit()
    {
        this.events= this.eventService.getEvents();  
    } 
}