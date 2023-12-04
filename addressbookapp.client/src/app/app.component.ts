import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';
import { Address } from './models/address.model';

//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //public forecasts: WeatherForecast[] = [];
  public contacts: Address[] = [];
  constructor(private http: HttpClient) {}

  //ngOnInit() {
  //  this.getForecasts();
  //}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.http.get<Address[]>('/addressbook/getallcontacts').subscribe(
      (result) => {
        this.contacts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //getForecasts() {
  //  this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //    (result) => {
  //      this.forecasts = result;
  //    },
  //    (error) => {
  //      console.error(error);
  //    }
  //  );
  //}

  title = 'addressbookapp.client';
}
