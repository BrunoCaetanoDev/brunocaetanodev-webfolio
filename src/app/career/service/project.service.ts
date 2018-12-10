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
    project1.department = "Bee Academy"
    project1.startMonth = "SEPTEMBER"
    project1.startYear = "2016";
    project1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac porttitor ligula, vitae luctus magna. Morbi egestas venenatis ornare. Donec maximus ullamcorper blandit. Nam venenatis tempus sem non tristique. Aenean blandit luctus pharetra. Nullam malesuada nisi vel lobortis egestas. Sed molestie libero at sem tincidunt efficitur. Morbi vel porttitor felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque interdum sodales felis. Cras tincidunt massa nec turpis viverra, in dignissim sapien aliquam."

    let project2  = new Project();
    project2.client = "TIMWE Group";
    project2.department = "B2C"
    project2.startMonth = "FEBRUARY"
    project2.startYear = "2017";
    project2.description = "Aliquam ultricies, urna sed gravida tristique, nulla quam efficitur tortor, dapibus gravida leo sem a justo. Quisque pharetra sapien quis condimentum congue. Vestibulum lobortis maximus dignissim. Etiam quam mauris, pellentesque ut urna sed, semper commodo mauris. In mollis id tortor ut bibendum. Mauris malesuada ipsum dui, ac semper dolor pretium a. Sed ultricies ex eu purus finibus aliquam. Vivamus sed lectus non sapien varius consectetur eget sit amet justo. Duis non consectetur diam. Nunc eget mi accumsan, aliquam neque eget, tempus lectus. Mauris vitae odio et arcu pharetra posuere. Suspendisse potenti."

    let project3  = new Project();
    project3.client = "Celfocus";
    project3.department = "Consumer IoT"
    project3.startMonth = "JULY"
    project3.startYear = "2018";
    project3.description = "Aliquam ultricies, urna sed gravida tristique, nulla quam efficitur tortor, dapibus gravida leo sem a justo. Quisque pharetra sapien quis condimentum congue. Vestibulum lobortis maximus dignissim. Etiam quam mauris, pellentesque ut urna sed, semper commodo mauris."

    this._projects.push(project3);
    this._projects.push(project2);
    this._projects.push(project1);

  }

}