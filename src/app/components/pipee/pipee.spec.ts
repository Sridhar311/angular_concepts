import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipee } from './pipee';

describe('Pipee', () => {
  let component: Pipee;
  let fixture: ComponentFixture<Pipee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
