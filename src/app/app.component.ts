import {Component, OnInit} from '@angular/core';
import {SideNavToggleService} from './sidenav-toggle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SideProject';
  isOpen = false;

  options = [
    {'name': 'home', 'path': 'home', 'icon': 'home'},
    {'name': 'profile', 'path': 'profile', 'icon': 'person'},
    {'name': 'career', 'path': 'career', 'icon': 'business_center'},
    {'name': 'training', 'path': 'training', 'icon': 'school'}
  ];

  constructor(private sideNavToggleService: SideNavToggleService) { }


  ngOnInit() {
    this.sideNavToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}


