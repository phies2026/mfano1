import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinHero } from './min-hero';

describe('MinHero', () => {
  let component: MinHero;
  let fixture: ComponentFixture<MinHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinHero],
    }).compileComponents();

    fixture = TestBed.createComponent(MinHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
