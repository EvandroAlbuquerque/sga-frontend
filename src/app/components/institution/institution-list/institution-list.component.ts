import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../../services/institution/institution.service';
import { Router } from '@angular/router';

export type InstitutionType = {
  id: number;
  name: String;
  address: {
    postalCode: String;
    street: String;
    number: number;
    district: String;
  }
  contact: {
    email: String;
    phone: String;
  }
}

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {

  public institutions= [
    {"id": 1, "name": "Instituição 1 MOCK", "address": {"postalCode": "58000001", "street": "rua da instituição 1 mock", "number": 111, "district": "centro"}, "contact": {"email": "instituicao1mock@email.com", "phone": "8332311111"}},
    {"id": 2, "name": "Instituição 2 MOCK", "address": {"postalCode": "58000002", "street": "rua da instituição 2 mock", "number": 222, "district": "jaguaribe"}, "contact": {"email": "instituicao2mock@email.com", "phone": "8332312222"}},
    {"id": 3, "name": "Instituição 3 MOCK", "address": {"postalCode": "58000003", "street": "rua da instituição 3 mock", "number": 333, "district": "torre"}, "contact": {"email": "instituicao2mock@email.com", "phone": "8332313333"}},
  ]

  constructor() { }

  ngOnInit() {
  }

}
