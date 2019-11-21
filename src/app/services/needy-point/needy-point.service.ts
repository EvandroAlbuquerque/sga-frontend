import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NeedyPointType } from '../../components/needy-point/needy-point-list/needy-point-list.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NeedyPointService {

  constructor(private http: HttpClient) { }

  private needyPointUrl = 'http://localhost:8080/api/needy-point/'
  
  getNeedyPoints(): Observable<NeedyPointType[]> {
    return this.http.get<NeedyPointType[]>(this.needyPointUrl);
  }
  postNeedyPoint(needyPoint: NeedyPointType): Observable<NeedyPointType> {
    const postUrl = this.needyPointUrl + 'add';
    return this.http.post<NeedyPointType>(postUrl, needyPoint, httpOptions);
  }

  deleteNeedyPoint(needyPoint: NeedyPointType): void {
    const deleteUrl = this.needyPointUrl + 'delete/' + needyPoint.id;
    this.http.delete(deleteUrl).subscribe((response => {console.log('Needy Point deleted!'); }));
  }
}
