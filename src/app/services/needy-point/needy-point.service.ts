import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NeedyPointType } from '../../components/needy-point/needy-point-list/needy-point-list.component';

@Injectable({
  providedIn: 'root'
})
export class NeedyPointService {

  constructor(private http: HttpClient) { }

  private needyPointsUrl = 'http://localhost:8080/api/needy-point/'
  
  getNeedyPoints(): Observable<NeedyPointType[]> {
    return this.http.get<NeedyPointType[]>(this.needyPointsUrl)
  }
}
