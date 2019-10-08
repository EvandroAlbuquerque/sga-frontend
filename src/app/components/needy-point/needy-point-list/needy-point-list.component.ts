import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needy-point-list',
  templateUrl: './needy-point-list.component.html',
  styleUrls: ['./needy-point-list.component.scss']
})
export class NeedyPointListComponent implements OnInit {

  needyPoints=[
    {"id": 1, "description": "Teste Ponto carente 1 mock", "obs": "Obs ponto carente 1 mock", "address": {"postalCode": "58000001", "district": "centro", "number": 11, "street": "rua do ponto carente 1 mock"}},
    {"id": 2, "description": "Teste Ponto carente 2 mock", "obs": "Obs ponto carente 2 mock", "address": {"postalCode": "58000002", "district": "centro", "number": 22, "street": "rua do ponto carente 2 mock"}},
    {"id": 3, "description": "Teste Ponto carente 3 mock", "obs": "Obs ponto carente 3 mock", "address": {"postalCode": "58000003", "district": "centro", "number": 33, "street": "rua do ponto carente 3 mock"}}
  ]

  constructor() { }

  ngOnInit() {
  }

}
