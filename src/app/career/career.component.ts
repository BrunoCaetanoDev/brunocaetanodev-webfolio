import { Component, OnInit } from '@angular/core';
import {Project} from './model/project';
import {ProjectService} from './service/project.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public projects: Project [];

  constructor(private _projectService: ProjectService) {
  }

  getClass(key: string): string {
    return key.split(' ')[0].toLowerCase();
  }

  ngOnInit() {
    this.projects = this._projectService.getProjects();
  }

}
