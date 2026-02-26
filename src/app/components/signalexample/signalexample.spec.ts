import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalexample } from './signalexample';

describe('Signalexample', () => {
  let component: Signalexample;
  let fixture: ComponentFixture<Signalexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalexample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
