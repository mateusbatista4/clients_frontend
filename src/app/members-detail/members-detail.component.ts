import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router,private appComponent:AppComponent) { }

  selected_member = { name: '', id: '', surname: '', email:'', phone: '', adress: '' };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));

      this.loadMember(id);
    })
  }
  loadMember(id) {
    this.api.getMember(parseInt(id)).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("erro aq: " + error);
      }
    )
  }
  update() {
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
        let index;
        this.appComponent.members.forEach((e,i) => {
          if(e.id == parseInt(this.selected_member.id)) index = i;
        })
        this.appComponent.members.splice(index,1)
        this.appComponent.members.splice(index, 0, data);
        this.router.navigate([''])
      },
      error => {
        console.log("erro aq: " + error);
      }
    )
  }
  delete() {
    this.api.deleteMember(this.selected_member.id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e,i) => {
          if(e.id == parseInt(this.selected_member.id)) index = i;
        })
        this.appComponent.members.splice(index,1)
      },
      error => {
        console.log("erro aq: " + error);
      }
    )
  }
  newMember(){
    this.router.navigate(['new-member'])
  }

  
}