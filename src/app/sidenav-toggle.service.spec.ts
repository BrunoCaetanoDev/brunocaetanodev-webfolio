import { TestBed } from '@angular/core/testing';

import { SidenavToogleService } from './sidenav-toggle.service';

describe('SidenavToogleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidenavToogleService = TestBed.get(SidenavToogleService);
    expect(service).toBeTruthy();
  });
});
