import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {id: 1, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista",phone: "999234"},
    {id: 2, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista",phone: "999234"},
    {id: 3, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista",phone: "999234"}
  ]

  constructor(private api: ApiService, private router: Router){
      this.getMembers();
  }

 getMembers  = () => {
    this.api.getAllMembers().subscribe(
      data => {
        
        this.members = data;
      },
      error => {
        console.log("Errr");
      }
    )
 }

 memberClicked = (member)=>{
    this.router.navigate(['member-detail/'+member.id]);
    
  
 }
}
