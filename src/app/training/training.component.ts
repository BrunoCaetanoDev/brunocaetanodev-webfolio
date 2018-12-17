import { Component, OnInit } from '@angular/core';
import {SkillService} from './service/skill.service';
import {Skill} from './model/skill';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  skills: Skill[];
  constructor(private _skillsService: SkillService) {
    this.skills = _skillsService.skills;
  }

  ngOnInit() {
  }

}
