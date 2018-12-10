import { TestBed } from '@angular/core/testing';

import { SideNavToggleService } from './sidenav-toggle.service';

describe('SidenavToogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideNavToggleService = TestBed.get(SideNavToggleService);
    expect(service).toBeTruthy();
  });
});
