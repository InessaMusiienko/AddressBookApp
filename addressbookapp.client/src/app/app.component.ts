import { Component, Inject, OnInit } from '@angular/core';
import { Address } from '../app/models/address.model';
import { forwardRef } from '@angular/core';
import { AddressesListComponent } from './components/addresses/addresses-list/addresses-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {  
  ngOnInit() { }

  title = 'addressbookapp.client';
}
