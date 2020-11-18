import { TestBed } from '@angular/core/testing';

import { ContentArrayService } from './content-array.service';

describe('ContentArrayService', () => {
  let service: ContentArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
