import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonationType } from 'src/app/components/donation-list/donation-list.component';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  private donationsUrl = 'http://localhost:8080/api/donation/'

  getDonations(): Observable<DonationType[]> {
    return this.http.get<DonationType[]>(this.donationsUrl)
  }
}
