import { TestBed } from '@angular/core/testing';

import { Foodcatalog } from './foodcatalog';

describe('Foodcatalog', () => {
  let service: Foodcatalog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Foodcatalog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
