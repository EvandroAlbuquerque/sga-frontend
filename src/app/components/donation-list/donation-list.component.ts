import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

export interface DonationType {
  id: number;
  category: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  donations: Array<DonationType>;
  // donation: DonationType;

  donationForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private service: DonationService, private router: Router) { }

  ngOnInit() {
    this.service.getDonations().subscribe(donations => this.donations = donations);
  }

  addDonation(donation: DonationType): void {
    donation = this.donationForm.value;
    // tslint:disable-next-line: no-shadowed-variable
    this.service.postDonation(donation).subscribe(donation => this.donations.push(donation));
  }

}
