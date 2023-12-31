import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})

export class PopUpComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopUpComponent>) {

  }

  inputdata: any;
  closepop() {
    this.ref.close();
  }

  ngOnInit(): void { this.inputdata = this.data; }
}
