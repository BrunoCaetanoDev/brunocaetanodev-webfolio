import {Component, HostListener, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {SideNavToggleService} from '../sidenav-toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavToggleService: SideNavToggleService, private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if (location.path() !== '') {
        this.title = location.path().replace('/', '').replace('-', ' ');
      } else {
        this.title = 'Home';
      }
    });
  }

  title;
  menu_icon = 'menu';
  language_icon = 'language'

  toggleMenu() {
    this.sideNavToggleService.toggle();
  }

  ngOnInit() {}
}
