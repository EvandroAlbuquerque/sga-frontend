import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../../../services/volunteer/volunteer.service';
import { Router } from '@angular/router';

export type VolunteerType = {
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
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
