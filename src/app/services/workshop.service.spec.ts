import { TestBed } from '@angular/core/testing';

import { WorkshopService } from './workshop.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('WorkshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ WorkshopService ]

  }));

  it('should be created', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    expect(service).toBeTruthy();
  });
});

