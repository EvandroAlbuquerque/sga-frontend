import { Component, OnInit } from '@angular/core';
import { NeedyPointService } from '../../../services/needy-point/needy-point.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VolunteerType } from '../../volunteer/volunteer-list/volunteer-list.component';

export interface NeedyPointType {
  id: number;
  description: string;
  obs: string;
  address: {
    postalCode: string;
    street: string;
    number: number;
    district: string;
  }
}

@Component({
  selector: 'app-needy-point-list',
  templateUrl: './needy-point-list.component.html',
  styleUrls: ['./needy-point-list.component.scss']
})
export class NeedyPointListComponent implements OnInit {

  // needyPoints=[
  //   {"id": 1, "description": "Teste Ponto carente 1 mock", "obs": "Obs ponto carente 1 mock", "address": {"postalCode": "58000001", "district": "centro", "number": 11, "street": "rua do ponto carente 1 mock"}},
  //   {"id": 2, "description": "Teste Ponto carente 2 mock", "obs": "Obs ponto carente 2 mock", "address": {"postalCode": "58000002", "district": "centro", "number": 22, "street": "rua do ponto carente 2 mock"}},
  //   {"id": 3, "description": "Teste Ponto carente 3 mock", "obs": "Obs ponto carente 3 mock", "address": {"postalCode": "58000003", "district": "centro", "number": 33, "street": "rua do ponto carente 3 mock"}}
  // ]

  needyPoints: Array<NeedyPointType>;
  // needyPoint: NeedyPointType;

  needyPointForm = new FormGroup({
    description: new FormControl(''),
    obs: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      postalCode: new FormControl(''),
      number: new FormControl(''),
      district: new FormControl('')
    })
  });

  constructor(private service: NeedyPointService, private router: Router) { }

  ngOnInit() {
    this.service.getNeedyPoints().subscribe(needyPoints => this.needyPoints = needyPoints);
  }

  add(needyPoint: NeedyPointType): void {
    needyPoint = this.needyPointForm.value;
    // tslint:disable-next-line: no-shadowed-variable
    this.service.postNeedyPoint(needyPoint).subscribe(needyPoint => this.needyPoints.push(needyPoint));
  }

  delete(needyPoint: NeedyPointType): void {
    this.service.deleteNeedyPoint(needyPoint);
    this.ngOnInit();
  }

}
