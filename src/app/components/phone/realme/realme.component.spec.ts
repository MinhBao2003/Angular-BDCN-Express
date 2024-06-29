import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmeComponent } from './realme.component';

describe('RealmeComponent', () => {
  let component: RealmeComponent;
  let fixture: ComponentFixture<RealmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealmeComponent]
    });
    fixture = TestBed.createComponent(RealmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
