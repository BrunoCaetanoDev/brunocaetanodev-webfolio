import { Component, OnInit } from '@angular/core';
import {SkillService} from './service/skill.service';
import {Skill} from './model/skill';
import {MatChip} from '@angular/material';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  skills: Skill[];
  renderSkillDescription: boolean[];
  private readonly maxStars: number;
  skillCategories: Set<string>;
  skillCategoryFilter: string[];


  constructor(private _skillsService: SkillService) {
    this.skills = _skillsService.skills;
    this.skillCategories = new Set<string>();
    this.renderSkillDescription = [];
    this.skillCategoryFilter = [];
    this.maxStars = 5;
    for (let skill of this.skills ) {
      this.renderSkillDescription[skill.name] = false;
      this.addSkill(skill.category);
    }
  }

  ngOnInit() {
  }

  private toggleDescriptionRender(name: string) {
    console.log(this.renderSkillDescription[name]);
    this.renderSkillDescription[name] = !this.renderSkillDescription[name];
  };

  private addSkill(skills: string[]){
    for(let skill of skills){
      this.skillCategories.add(skill);
    }
  }

  private arrayFilled(score: number) : any []{
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

  private applyFilter(skillCategories: string[]): boolean {
    if(this.skillCategoryFilter.length === 0) {
      return true;
    }
    for(let skillCategory of skillCategories) {
      if(this.skillCategoryFilter.indexOf(skillCategory) !== -1) {
        return true;
      }
    }
    return false;
  }

  private toggleCategorySelection(skillCategory: string, categoryChip: MatChip) {
    console.log(  categoryChip.selected);
    categoryChip.selected = !categoryChip.selected;
    console.log(  categoryChip.selected);
    let index = this.skillCategoryFilter.indexOf(skillCategory);
    index !== -1 ? this.skillCategoryFilter.splice(index, 1) : this.skillCategoryFilter.push(skillCategory);
  }
}
