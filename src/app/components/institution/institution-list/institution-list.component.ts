import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../../services/institution/institution.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

export interface InstitutionType {
  id: number;
  name: string;
  initials: string;
  description: string;
  address: {
    postalCode: string;
    street: string;
    number: number;
    district: string;
  };
  contact: {
    email: string;
    phone: string;
  };
}

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {

  // public institutions= [
  //   {"id": 1, "name": "Instituição 1 MOCK", "address": {"postalCode": "58000001", "street": "rua da instituição 1 mock", "number": 111, "district": "centro"}, "contact": {"email": "instituicao1mock@email.com", "phone": "8332311111"}},
  //   {"id": 2, "name": "Instituição 2 MOCK", "address": {"postalCode": "58000002", "street": "rua da instituição 2 mock", "number": 222, "district": "jaguaribe"}, "contact": {"email": "instituicao2mock@email.com", "phone": "8332312222"}},
  //   {"id": 3, "name": "Instituição 3 MOCK", "address": {"postalCode": "58000003", "street": "rua da instituição 3 mock", "number": 333, "district": "torre"}, "contact": {"email": "instituicao2mock@email.com", "phone": "8332313333"}},
  // ]

  institutions: Array<InstitutionType>;
  // institution: InstitutionType;

  institutionForm = new FormGroup({
    name: new FormControl(''),
    initials: new FormControl(''),
    description: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      number: new FormControl(''),
      postalCode: new FormControl(''),
      district: new FormControl('')
    }),
    contact: new FormGroup({
      phone: new FormControl(''),
      email: new FormControl('')
    }),
  });

  constructor(private service: InstitutionService, private router: Router) { }

  ngOnInit() {
    this.service.getInstitutions().subscribe(institutions => this.institutions = institutions);
  }

  addInstitution(institution: InstitutionType): void {
    institution = this.institutionForm.value;
    // tslint:disable-next-line: no-shadowed-variable
    this.service.postInstitution(institution).subscribe(institution => this.institutions.push(institution));
  }

}
