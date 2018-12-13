import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {SideNavToggleService} from '../navigation/sidenav-toggle.service';
import { Router } from '@angular/router';
import {TranslateService} from '../translate/service/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _sideNavToggleService: SideNavToggleService, private router: Router,
              private location: Location, private _translateService: TranslateService) {
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
  language_icon = 'language';

  toggleMenu() {
    this._sideNavToggleService.toggle();
  }

  public translateTo(language: string) {
    this._translateService.use(language);
  }

  ngOnInit() {}

}
