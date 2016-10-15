import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

    @Input() name: string;
    @Input() description: string;
    @Input() date: string;
    @Input() active: boolean;

    constructor() {
    }
}