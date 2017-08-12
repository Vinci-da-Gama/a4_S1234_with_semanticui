import { TestBed, inject } from '@angular/core/testing';

import { DataResolveServiceService } from './data-resolve-service.service';

describe('DataResolveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataResolveServiceService]
    });
  });

  it('should be created', inject([DataResolveServiceService], (service: DataResolveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
