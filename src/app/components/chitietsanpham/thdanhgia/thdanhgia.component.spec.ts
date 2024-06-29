import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThdanhgiaComponent } from './thdanhgia.component';

describe('ThdanhgiaComponent', () => {
  let component: ThdanhgiaComponent;
  let fixture: ComponentFixture<ThdanhgiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThdanhgiaComponent]
    });
    fixture = TestBed.createComponent(ThdanhgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
