import { TestBed } from '@angular/core/testing';

import { SelfiesService } from './selfies.service';

describe('SelfiesService', () => {
  let service: SelfiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
