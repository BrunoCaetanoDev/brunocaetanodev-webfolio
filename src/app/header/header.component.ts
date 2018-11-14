import {Component, HostListener, OnInit} from '@angular/core';
import {SideNavToggleService} from '../sidenav-toggle.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavToggleService: SideNavToggleService) { }

  icon = 'menu';

  toggleMenu() {
    this.sideNavToggleService.toggle();
    if (this.sideNavToggleService.isOpen) {
      this.icon = 'close';
    } else {
      this.icon = 'menu';
    }
  }

  ngOnInit() {}
}
