import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  selected_member = { name: '', id: '', surname: '' };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap)=>{
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
}
