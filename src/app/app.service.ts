import { Events } from './model/events.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly ENDPOINT = 'http://localhost:3000';

  constructor(private readonly httpClient: HttpClient) { }

  obterEventos(): Observable<Events[]> {
    return this.httpClient.get<Events[]>(`${this.ENDPOINT}/events`);
  }

  obterEventosPorId(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.ENDPOINT}/events/${id}`);
  }

}
