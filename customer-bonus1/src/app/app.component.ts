import { Component, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'customer-bonus1';

  columnDefs = [
    { field: 'first_name', sortable:true, filter:true },
    { field: 'last_name', sortable:true, filter:true },
    { field: 'email', sortable:true, filter:true },
    { field: 'phone_number' , sortable:true, filter:true}
  ];

  /*rowData=[
    {FirstName: 'Anthony', LastName: 'Veliz', Email:'anpave_10@gmail.com', PhoneNumber: '9932812'},
    {FirstName: 'Christian', LastName: 'Veliz', Email:'titi@gmail.com', PhoneNumber: '9962812'}
  ];*/

  rowData:any;

  constructor(private http: HttpClient) {

  }

  ngOnInit():void{
    this.rowData = this.http.get('http://localhost:8000/api/customers');

  }
}
