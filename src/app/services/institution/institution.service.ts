import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstitutionType } from '../../components/institution/institution-list/institution-list.component';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  private actionsUrl = 'http://localhost:8080/api/action/'
  
  getActions(): Observable<InstitutionType[]> {
    return this.http.get<InstitutionType[]>(this.institutionssUrl)
  }
}
