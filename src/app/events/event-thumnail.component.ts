import { Component , Input} from "@angular/core"

@Component({
    selector : "event-thumnail",
    template : `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail" >
    <h2>{{event.name}}</h2>
    <div>Date : {{event.date}} </div>

    <div [ngSwitch]="event?.time" >
        Time : {{event.time}} 
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    
    <div>Price : {{event.price}} </div>
    <div *ngIf="event?.location">
        <span>Location : {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        <span>Online Url : {{event.onlineUrl}}</span>
    </div>
    </div>
    `,
    styles : [
        `.mar-right-15 {margin-right : 19px;}
        .thumbnail { min-height : 210px;}`
    ]
})

export class EventThumnailComponent{ 
   @Input() event : any
}
