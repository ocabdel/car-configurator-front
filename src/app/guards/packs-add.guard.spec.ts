import { TestBed } from '@angular/core/testing';

import { PacksAddGuard } from './packs-add.guard';

describe('PacksAddGuard', () => {
  let guard: PacksAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PacksAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
