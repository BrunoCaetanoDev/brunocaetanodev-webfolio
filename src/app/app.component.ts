import {Component, OnInit} from '@angular/core';
import {SideNavToggleService} from './sidenav-toggle.service';
import {fadeAnimation} from '../animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent implements OnInit {

  isOpen = false;

  options = [
    {'name': 'home', 'path': 'home', 'icon': 'home'},
    {'name': 'profile', 'path': 'profile', 'icon': 'person'},
    {'name': 'career', 'path': 'career', 'icon': 'business_center'},
    {'name': 'training', 'path': 'training', 'icon': 'school'},
    {'name': 'contact', 'path': 'contact-info', 'icon': 'email'}
  ];

  constructor(private sideNavToggleService: SideNavToggleService) { }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public toggleMenu(){
    console.log(this.sideNavToggleService.isOpen)
    this.sideNavToggleService.toggle();
    console.log(this.sideNavToggleService.isOpen)
  }

  ngOnInit() {
    this.sideNavToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}


