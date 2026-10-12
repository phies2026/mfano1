import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glow } from './glow';

describe('Glow', () => {
  let component: Glow;
  let fixture: ComponentFixture<Glow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glow],
    }).compileComponents();

    fixture = TestBed.createComponent(Glow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
