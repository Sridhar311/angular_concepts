import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attributedirective } from './attributedirective';

describe('Attributedirective', () => {
  let component: Attributedirective;
  let fixture: ComponentFixture<Attributedirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attributedirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attributedirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
