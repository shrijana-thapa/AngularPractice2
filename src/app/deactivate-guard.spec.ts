import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { DeactiveGuard } from './deactivate-guard';

describe('deactivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => DeactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
