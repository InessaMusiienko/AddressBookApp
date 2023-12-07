import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address.model';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AppComponent } from '../../../app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrl: './addresses-list.component.css',
})
export class AddressesListComponent implements OnInit {


  public contacts: any;
  public allContacts: any;
  constructor(private dialogRef: MatDialog, public app: AppComponent, private http: HttpClient) {
    this.contacts = [];
    this.allContacts = [];
  }
  
  openDialog(id: string) {

    let c = this.allContacts as Address[];
    let contact = c.find((x) => x.id === id);

    this.dialogRef.open(PopUpComponent, {
      width: '380px',
      
      data: { contact },
    });
  }

  ngOnInit(): void {
    this.getContacts();   
  }
  getContacts() {
    this.http.get('http://localhost:5250/AddressBook/GetAllContacts').subscribe(
      (result: any) => {
        this.allContacts = result;
        this.contacts = this.allContacts
      },
      (error) => {
        console.error(error);
      }
    );
  }
  

  search(text: string) {
    
    if (!text) {
      this.contacts = this.allContacts;
      return;
    }
    let c = this.allContacts as Address[];
    this.contacts = c.filter((x) => x.nameFirst.toLowerCase().includes(text.toLowerCase()) ||
      x.nameLast.toLowerCase().includes(text.toLowerCase()));      
  }
}
