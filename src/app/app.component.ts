import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ApiService} from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {id: 1, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista"},
    {id: 2, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista"},
    {id: 3, name: "mateus", email:"mateus999batista@gmail.com", surname: "Batista"}
  ]

  constructor(private api: ApiService){
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
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
      },
      error =>{

      }
    )
 }
}
