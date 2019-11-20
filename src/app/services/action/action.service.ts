import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActionType } from '../../components/action/action-list/action-list.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  private actionsUrl = 'http://localhost:8080/api/action/';
  private actionPostUrl = 'http://localhost:8080/api/action/add';

  getActions(): Observable<ActionType[]> {
    return this.http.get<ActionType[]>(this.actionsUrl);
  }

  postAction(action: ActionType): Observable<ActionType> {
    return this.http.post<ActionType>(this.actionPostUrl, action, httpOptions);
  }

  // getAction(id: number): Observable<ActionType> {
  //   return this.http.get<ActionType>(this.actionsUrl+id);
  // }

  // putAction(id: number, editedAction: ActionType): Observable<ActionType> {
  //   return this.http.put<ActionType>(this.actionsUrl+id, editedAction);
  // }

  // deleteAction(id:number): Observable<{}> {
  //   return this.http.delete(this.actionsUrl+id)
  // }

}
