import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyuetComponent } from './tyuet.component';

describe('TyuetComponent', () => {
  let component: TyuetComponent;
  let fixture: ComponentFixture<TyuetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TyuetComponent]
    });
    fixture = TestBed.createComponent(TyuetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
