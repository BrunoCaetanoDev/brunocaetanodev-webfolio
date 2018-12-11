import {Component, OnInit} from '@angular/core';
import {SideNavToggleService} from './navigation/sidenav-toggle.service';
import {fadeAnimation, slideInAnimation} from '../animations';
import {TranslateService} from './translate/service/translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation,
    slideInAnimation
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

  onSwipeRight($event) {
    if(!this.isOpen) {
      this.sideNavToggleService.toggle();
    }
  }

}


