import { CalendarComponent } from './calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule} from 'primeng/fullcalendar';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  exports: [CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
  ]
})
export class CalendarModule { }
