import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VolunteerType } from '../../components/volunteer/volunteer-list/volunteer-list.component';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  private volunteersUrl = 'http://localhost:8080/api/volunteer/'
  
  getVolunteers(): Observable<VolunteerType[]> {
    return this.http.get<VolunteerType[]>(this.volunteersUrl)
  }
}
