import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address.model';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrl: './addresses-list.component.css'
})
export class AddressesListComponent implements OnInit {

  //url = 'https://randomuser.me/api/?results=50';

  addresses: Address[] = [
    {
      gender: 'female',

      nameTitle: 'Miss',
      nameFirst: 'Jennie',
      nameLast: 'Nichols',

      streetNumber: 8929,
      streetName: 'Valwood Pkwy',

      city: 'Billings',
      state: 'Michigan',
      country: 'United States',
      postcode: '63104',

      email: 'jennie.nichols@example.com',

      phone: '(272) 790-0888',
      cell: '(489) 330-2385',

      picture: 'https://randomuser.me/api/portraits/men/75.jpg',

      nat: 'US'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {

  }
}