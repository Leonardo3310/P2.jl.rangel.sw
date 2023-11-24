/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DinosaurioServiceService } from './dinosaurio-service.service';

describe('Service: DinosaurioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinosaurioServiceService]
    });
  });

  it('should ...', inject([DinosaurioServiceService], (service: DinosaurioServiceService) => {
    expect(service).toBeTruthy();
  }));
});
