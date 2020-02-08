import { Component, OnInit, ViewChild, AfterViewInit, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { FullCalendar } from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBr from '@fullcalendar/core/locales/pt-br';
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'ng-calendar',
  template: `<p-fullCalendar
                [events]="events"
                [options]="options"
                [style]="style"
                [styleClass]="styleClass">
              </p-fullCalendar>`,
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  @ViewChild(FullCalendar) fullCalendar: FullCalendar;

  @Input() style: any;

  @Input() styleClass: string;

  @Input() events: any[];

  @Input() options: any;

  _defaultOptions: any;


  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this._defaultOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth, timeGridWeek, dayGridDay',
      },
      editable: false,
      weekends: true,
      locale: ptBr
    };

    this.options = { ...this._defaultOptions, ...this.options};

  }

  get calendar(): Calendar {
    return (this.fullCalendar.getCalendar() as Calendar);
  }

}
