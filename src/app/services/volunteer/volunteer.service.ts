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

  private volunteerUrl = 'http://localhost:8080/api/volunteer/';

  getVolunteers(): Observable<VolunteerType[]> {
    return this.http.get<VolunteerType[]>(this.volunteerUrl);
  }

  postVolunteer(volunteer: VolunteerType): Observable<VolunteerType> {
    const postUrl = this.volunteerUrl + 'add';
    return this.http.post<VolunteerType>(postUrl, volunteer, httpOptions);
  }

  deleteVolunteer(volunteer: VolunteerType): void {
    const deleteUrl = this.volunteerUrl + 'delete/' + volunteer.id;
    this.http.delete(deleteUrl).subscribe((response => {console.log('Volunteer deleted!'); }));
  }
}
