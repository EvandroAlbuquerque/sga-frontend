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

  volunteers: Array<VolunteerType>;
  volunteer: VolunteerType;

  constructor(private service: VolunteerService, private router: Router) { }

  ngOnInit() {
    this.service.getVolunteers().subscribe(volunteers => this.volunteers = volunteers);
  }

  postVolunteer(volunteer: VolunteerType): void {
    this.service.postVolunteer(volunteer).subscribe(volunteer => this.volunteers.push(volunteer));
  }

}
