import { CalendarComponent } from './../calendar/calendar.component';
import { Events } from './../model/events.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.scss']
})
export class CalendarDemoComponent implements OnInit {

  @ViewChild(CalendarComponent) calendarComponent: CalendarComponent

  title = 'ng-calendar';

  events: any = [];

  options: any;

  eventsOptions: any[];

  selectedEvent;

  display: boolean = false;

  constructor(private readonly appService: AppService) { }

  ngOnInit() {
    this.appService.obterEventos().subscribe((value: Events[]) => {
      this.eventsOptions = this.buildOptions(value);
      this.events = value[0].event;
      this.goToDate(value[0].event[0].start);

    });

    this.options = {
      eventClick: () => {
        this.display = !this.display;
      }
    }
  }

  buildOptions(value: Events[]) {
    return value.map(item => ({
      label: item.name,
      value: item
    }));
  }

  preencherAgenda(event) {
    this.events = (event.option.value as Events).event;
    const evento = (event.option.value as Events);
    this.goToDate(evento.event[0].start)
  }

  goToDate(date) {
    this.calendarComponent.calendar.gotoDate(date);
  }

  closeDialog(event) {
    this.display = event;
  }
}
