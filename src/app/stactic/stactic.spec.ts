import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stactic } from './stactic';

describe('Stactic', () => {
  let component: Stactic;
  let fixture: ComponentFixture<Stactic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stactic],
    }).compileComponents();

    fixture = TestBed.createComponent(Stactic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
