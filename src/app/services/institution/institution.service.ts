import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstitutionType } from '../../components/institution/institution-list/institution-list.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  private institutionsUrl = 'http://localhost:8080/api/institution/';
  private institutionPostUrl = 'http://localhost:8080/api/institution/add';

  getInstitutions(): Observable<InstitutionType[]> {
    return this.http.get<InstitutionType[]>(this.institutionsUrl);
  }

  postInstitution(institution: InstitutionType): Observable<InstitutionType> {
    return this.http.post<InstitutionType>(this.institutionPostUrl, institution, httpOptions);
  }
}
