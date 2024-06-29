import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatthanhcongComponent } from './datthanhcong.component';

describe('DatthanhcongComponent', () => {
  let component: DatthanhcongComponent;
  let fixture: ComponentFixture<DatthanhcongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatthanhcongComponent]
    });
    fixture = TestBed.createComponent(DatthanhcongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
