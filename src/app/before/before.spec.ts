import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Before } from './before';

describe('Before', () => {
  let component: Before;
  let fixture: ComponentFixture<Before>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Before],
    }).compileComponents();

    fixture = TestBed.createComponent(Before);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
