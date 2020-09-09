import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private rout: ActivatedRoute, private api: ApiService) { }

  selected_member = { name: '', id: '', surname: '' };

  ngOnInit(): void {
    this.loadMember();
  }
  loadMember() {
    const id = this.rout.snapshot.paramMap.get('id');
    console.log(id);
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
