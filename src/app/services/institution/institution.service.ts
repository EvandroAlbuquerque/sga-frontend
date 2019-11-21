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

  private institutionUrl = 'http://localhost:8080/api/institution/';

  getInstitutions(): Observable<InstitutionType[]> {
    return this.http.get<InstitutionType[]>(this.institutionUrl);
  }

  postInstitution(institution: InstitutionType): Observable<InstitutionType> {
    const postUrl = this.institutionUrl + 'add';
    return this.http.post<InstitutionType>(postUrl, institution, httpOptions);
  }

  deleteInstitution(institution: InstitutionType): void {
    const deleteUrl = this.institutionUrl + 'delete/' + institution.id;
    this.http.delete(deleteUrl).subscribe((response => {console.log('Institution deleted!'); }));
  }
}
