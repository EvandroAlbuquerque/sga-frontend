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

  private actionUrl = 'http://localhost:8080/api/action/';
  private actionPostUrl = 'http://localhost:8080/api/action/add';

  getActions(): Observable<ActionType[]> {
    return this.http.get<ActionType[]>(this.actionUrl);
  }

  postAction(action: ActionType): Observable<ActionType> {
    const postUrl = this.actionUrl + 'add';
    return this.http.post<ActionType>(postUrl, action, httpOptions);
  }

  deleteAction(action: ActionType): void {
    const deleteUrl = this.actionUrl;
    this.http.delete(deleteUrl).subscribe((response => {console.log('Action deleted!'); }));
  }

  // getAction(id: number): Observable<ActionType> {
  //   return this.http.get<ActionType>(this.actionsUrl+id);
  // }

  // putAction(id: number, editedAction: ActionType): Observable<ActionType> {
  //   return this.http.put<ActionType>(this.actionsUrl+id, editedAction);
  // }


}
