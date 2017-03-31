/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarteleraService } from './cartelera.service';

describe('CarteleraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarteleraService]
    });
  });

  it('should ...', inject([CarteleraService], (service: CarteleraService) => {
    expect(service).toBeTruthy();
  }));
});
