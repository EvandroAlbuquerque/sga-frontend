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

  private needyPointsUrl = 'http://localhost:8080/api/needy-point/'
  private addNeedyPointUrl = 'http://localhost:8080/api/needy-point/add'
  
  getNeedyPoints(): Observable<NeedyPointType[]> {
    return this.http.get<NeedyPointType[]>(this.needyPointsUrl);
  }
  postNeedyPoint(needyPoint: NeedyPointType): Observable<NeedyPointType> {
    return this.http.post<NeedyPointType>(this.addNeedyPointUrl, needyPoint, httpOptions);
  }
}
