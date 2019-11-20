import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VolunteerType } from '../../components/volunteer/volunteer-list/volunteer-list.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  private volunteersUrl = 'http://localhost:8080/api/volunteer/';
  private addVolunteerUrl = 'http://localhost:8080/api/volunteer/add';

  getVolunteers(): Observable<VolunteerType[]> {
    return this.http.get<VolunteerType[]>(this.volunteersUrl);
  }

  postVolunteer(volunteer: VolunteerType): Observable<VolunteerType> {
    return this.http.post<VolunteerType>(this.addVolunteerUrl, volunteer, httpOptions);
  }
}
