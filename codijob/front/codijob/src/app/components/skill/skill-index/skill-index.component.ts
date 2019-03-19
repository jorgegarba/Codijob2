import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../../services/skill.service';

@Component({
  selector: 'app-skill-index',
  templateUrl: './skill-index.component.html',
  styleUrls: [],
})
export class SkillIndexComponent implements OnInit {
  skills:Array<any> = [];
  constructor(private _sSkill:SkillService) { }

  ngOnInit() {
    this._sSkill.getAll().subscribe((response:any)=>{
      console.log(response);
      this.skills = response.content;
      console.log(this.skills);
    });
  }

}
