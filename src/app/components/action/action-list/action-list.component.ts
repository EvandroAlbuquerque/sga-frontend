import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../../services/action/action.service';
import { Router } from '@angular/router';

export type ActionType = {
  id: number;
  responsible: String;
  description: String;
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

  // public actions = [
  //   {"id": 1, "responsible": {"id": 1, "name": "Voluntário1 MOCK", "contact": {"email": "voluntario1mock@email.com", "phone": "83999998888"} , "address": {"postalCode": "58000001", "district": "mangabeira", "number": 10, "street": "rua do voluntario 1 mock"}}, "hour": "13:00" , "place": {"postalCode": "58000001", "district": "centro", "number": 11, "street": "rua da ação social 1 mock"}, "obs": "TESTE", "scheduled": true},
  //   {"id": 2, "responsible": {"id": 2, "name": "Voluntário2 MOCK", "contact": {"email": "voluntario2mock@email.com", "phone": "83999998887"} , "address": {"postalCode": "58000002", "district": "mangabeira 2", "number": 20, "street": "rua do voluntario 2 mock"}}, "hour": "14:00" , "place": {"postalCode": "58000002", "district": "jaguaribe", "number": 22, "street": "rua da ação social 2 mock"}, "obs": "TESTE", "scheduled": true},
  //   {"id": 3, "responsible": {"id": 3, "name": "Voluntário3 MOCK", "contact": {"email": "voluntario3mock@email.com", "phone": "83999998886"} , "address": {"postalCode": "58000003", "district": "mangabeira 3", "number": 30, "street": "rua do voluntario 3 mock"}}, "hour": "15:00" , "place": {"postalCode": "58000003", "district": "torre", "number": 33, "street": "rua da ação social 3 mock"}, "obs": "TESTE", "scheduled": true},
  // ]

  actions: Array<ActionType>;
  showForm = false;
  // action: ActionType;
  constructor(private service: ActionService, private router: Router) { }
  // constructor() {}

  ngOnInit() {
    this.service.getActions().subscribe(actions => this.actions = actions);
  }

  // openAction(id: number) {
  //   this.router.navigate(['/action', id]);
  // }
}
