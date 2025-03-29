import { TestBed } from '@angular/core/testing';

import { OdoService } from './odo.service';

describe('OdoService', () => {
  let service: OdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
