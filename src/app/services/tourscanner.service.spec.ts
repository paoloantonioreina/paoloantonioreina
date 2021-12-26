import { TestBed } from '@angular/core/testing';

import { TourscannerService } from './tourscanner.service';

describe('TourscannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourscannerService = TestBed.get(TourscannerService);
    expect(service).toBeTruthy();
  });
});
