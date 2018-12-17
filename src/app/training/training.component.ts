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
  shouldShow: boolean[];
  private maxStars: number;
  skillCategories: Set<string>;

  constructor(private _skillsService: SkillService) {
    this.skills = _skillsService.skills;
    this.shouldShow = [];
    this.maxStars = 5;
    this.skillCategories = new Set<string>();
    for (let skill of this.skills ) {
      this.shouldShow[skill.name] = false;
      this.addSkill(skill.type);
    }
  }

  ngOnInit() {
  }

  public toggleDescriptionRender(name: string) {
    console.log(this.shouldShow[name]);
    this.shouldShow[name] = !this.shouldShow[name];
  };

  public addSkill(skills: string[]){
    for(let skill of skills){
      this.skillCategories.add(skill);
    }
  }

  public arrayFilled(score: number) : any []{

    let tempArray = [];

    for(let i = 1; i <= this.maxStars; i++) {
      if(i <= score) {
        tempArray.push(true);
      } else  {
        tempArray.push(false)
      }
    }
    return tempArray;
  }

}
