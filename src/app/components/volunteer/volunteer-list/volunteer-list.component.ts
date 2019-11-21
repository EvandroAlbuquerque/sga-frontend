import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../../../services/volunteer/volunteer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

export interface VolunteerType {
  id: number;
  name: string;
  address: {
    postalCode: number;
    street: string;
    number: number;
    district: string;
  };
  contact: {
    email: string;
    phone: number;
  };
}

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  volunteers: Array<VolunteerType>;
  volunteer: VolunteerType;

  volunteerForm = new FormGroup({
    name: new FormControl(''),
    contact: new FormGroup({
      phone: new FormControl(''),
      email: new FormControl('')
    }),
    address: new FormGroup({
      street: new FormControl(''),
      postalCode: new FormControl(''),
      number: new FormControl(''),
      district: new FormControl('')
    })
  });

  constructor(private service: VolunteerService, private router: Router) { }

  ngOnInit() {
    this.service.getVolunteers().subscribe(volunteers => this.volunteers = volunteers);
  }

  add(volunteer: VolunteerType): void {
    volunteer = this.volunteerForm.value;
    // tslint:disable-next-line: no-shadowed-variable
    this.service.postVolunteer(volunteer).subscribe(volunteer => this.volunteers.push(volunteer));
  }

  delete(volunteer: VolunteerType): void {
    this.service.deleteVolunteer(volunteer);
    this.ngOnInit();
  }

}
