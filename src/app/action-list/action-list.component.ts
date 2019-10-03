import { Component, OnInit } from '@angular/core';
import { ActionService } from '../action.service';
import { Router } from '@angular/router';

export type ActionType = {
  id: number;
  responsible: String;
  place: {
    postalCode: String;
    street: String;
    number: number;
    district: String;
  }
  hour: String;
  obs: String;
  current: boolean;
}

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  actions: Array<ActionType>;
  action: ActionType;
  constructor(private service: ActionService, private router: Router) { }

  ngOnInit() {
    this.service.getActions().subscribe(actions => this.actions = actions);
  }

  openAction(id: number) {
    this.router.navigate(['/action', id]);
  }
}
