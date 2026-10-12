import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinStatics } from './min-statics';

describe('MinStatics', () => {
  let component: MinStatics;
  let fixture: ComponentFixture<MinStatics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinStatics],
    }).compileComponents();

    fixture = TestBed.createComponent(MinStatics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
