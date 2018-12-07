import {Component, OnInit} from '@angular/core';
import {SideNavToggleService} from './sidenav-toggle.service';
import {fadeAnimation} from '../animations';
import {TranslateService} from './translate.service';


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
    {'name': 'contact', 'path': 'contact', 'icon': 'email'}
  ];

  constructor(private sideNavToggleService: SideNavToggleService, private translate: TranslateService) { }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  toggleMenu() {
    this.sideNavToggleService.toggle();
  }

  ngOnInit() {
    this.sideNavToggleService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}


