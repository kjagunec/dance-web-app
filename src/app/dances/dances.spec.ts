import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dances } from './dances';

describe('Dances', () => {
  let component: Dances;
  let fixture: ComponentFixture<Dances>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dances]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dances);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
