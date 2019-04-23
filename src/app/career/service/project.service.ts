import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly _projects : Project [];


  public getProjects(): Project[] {
    return this._projects;
  }

  constructor() {

    this._projects = [];

    let project1  = new Project();
    project1.client = "Bee Engineering";
    project1.department = "Bee Academy";
    project1.startMonth = "SEPTEMBER";
    project1.startYear = "2016";
    project1.description = "BEE_SUMMARY";

    let project2  = new Project();
    project2.client = "TIMWE Group";
    project2.department = "B2C";
    project2.startMonth = "FEBRUARY";
    project2.startYear = "2017";
    project2.description = "TIMWE_SUMMARY";

    let project3  = new Project();
    project3.client = "Celfocus";
    project3.department = "Consumer IoT";
    project3.startMonth = "JULY";
    project3.startYear = "2018";
    project3.description = "CELFOCUS_SUMMARY";
    this._projects.push(project3);
    this._projects.push(project2);
    this._projects.push(project1);

  }

}
