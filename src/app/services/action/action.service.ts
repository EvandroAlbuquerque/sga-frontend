import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActionType } from '../../components/action/action-list/action-list.component';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  private actionsUrl = 'http:localhost:8080/api/action/'
  
  postAction(newAction: ActionType): Observable<ActionType> {
    return this.http.post<ActionType>(this.actionsUrl, newAction);
  }

  getAction(id: number): Observable<ActionType> {
    return this.http.get<ActionType>(this.actionsUrl+id);
  }

  putAction(id: number, editedAction: ActionType): Observable<ActionType> {
    return this.http.put<ActionType>(this.actionsUrl+id, editedAction);
  }

  deleteAction(id:number): Observable<{}> {
    return this.http.delete(this.actionsUrl+id)
  }

  getActions(): Observable<ActionType[]> {
    return this.http.get<ActionType[]>(this.actionsUrl)
  }
}
