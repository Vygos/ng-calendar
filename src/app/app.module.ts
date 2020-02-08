import { NgModule } from '@angular/core';
import { CalendarModule } from './calendar/calendar.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CalendarDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ListboxModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
