import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }
  new_member = {
    name: '',
    surname: '',
    phone: '',
    email:'',
    profile_picture:''
  }
  create() {
    this.api.createMember(this.new_member).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log("erro aq: " + error);
      }
    )

  }


}
