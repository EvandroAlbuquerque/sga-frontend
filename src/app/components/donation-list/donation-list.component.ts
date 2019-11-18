import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation/donation.service';
import { Router } from '@angular/router';

export type DonationType = {
  id: number;
  category: String;
  name: String;
  description: String;
}

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  donations: Array<DonationType>;

  constructor(private service: DonationService, private router: Router) { }

  ngOnInit() {
    this.service.getDonations().subscribe(donations => this.donations = donations);
  }

}
