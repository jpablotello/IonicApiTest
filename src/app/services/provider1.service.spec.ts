import { TestBed } from '@angular/core/testing';

import { Provider1Service } from './provider1.service';

describe('Provider1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Provider1Service = TestBed.get(Provider1Service);
    expect(service).toBeTruthy();
  });
});
