import { TestBed } from '@angular/core/testing';

import { ConfigurationsListGuard } from './configurations-list.guard';

describe('ConfigurationsListGuard', () => {
  let guard: ConfigurationsListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfigurationsListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
