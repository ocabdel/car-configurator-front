import { TestBed } from '@angular/core/testing';

import { CarsAddGuard } from './cars-add.guard';

describe('CarsAddGuard', () => {
  let guard: CarsAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CarsAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
