import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstitutionType } from '../../components/institution/institution-list/institution-list.component';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  private institutionsUrl = 'http://localhost:8080/api/institution/';
  
  getInstitutions(): Observable<InstitutionType[]> {
    return this.http.get<InstitutionType[]>(this.institutionsUrl)
  }
}
