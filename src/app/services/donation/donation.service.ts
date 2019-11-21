import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DonationType, ForwardDonationType } from 'src/app/components/donation-list/donation-list.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  private donationUrl = 'http://localhost:8080/api/donation/';

  getDonations(): Observable<DonationType[]> {
    return this.http.get<DonationType[]>(this.donationUrl);
  }

  postDonation(donation: DonationType): Observable<DonationType> {
    const postUrl = this.donationUrl + 'add';
    return this.http.post<DonationType>(postUrl, donation, httpOptions);
  }

  deleteDonation(donation: DonationType): void {
    const deleteUrl = this.donationUrl + 'delete/' + donation.id;
    this.http.delete(deleteUrl).subscribe((response => {console.log('Donation deleted!'); }));
  }
}
