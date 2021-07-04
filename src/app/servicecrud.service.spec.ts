import { TestBed } from '@angular/core/testing';

import { ServicecrudService } from './servicecrud.service';

describe('ServicecrudService', () => {
  let service: ServicecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
