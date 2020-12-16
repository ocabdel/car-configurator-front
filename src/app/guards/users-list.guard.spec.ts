import { TestBed } from '@angular/core/testing';

import { UsersListGuard } from './users-list.guard';

describe('UsersListGuard', () => {
  let guard: UsersListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
