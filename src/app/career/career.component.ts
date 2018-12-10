import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public projects : Project [];
  private _projectService;

  constructor(projectService : ProjectService) {
    this._projectService = projectService;
  }

  getClass(key : string) : string {
    return key.split(' ')[0].toLowerCase();
  }

  ngOnInit() {
    this.projects = this._projectService.getProjects();
  }

}
