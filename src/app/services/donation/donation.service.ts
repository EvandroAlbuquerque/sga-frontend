import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonationType } from 'src/app/components/donation-list/donation-list.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  private donationsUrl = 'http://localhost:8080/api/donation/';
  private donationPostUrl = 'http://localhost:8080/api/donation/add';

  getDonations(): Observable<DonationType[]> {
    return this.http.get<DonationType[]>(this.donationsUrl);
  }

  postDonation(donation: DonationType): Observable<DonationType> {
    return this.http.post<DonationType>(this.donationPostUrl, donation, httpOptions);
  }
}
