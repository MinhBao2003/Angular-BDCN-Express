import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondathangComponent } from './dondathang.component';

describe('DondathangComponent', () => {
  let component: DondathangComponent;
  let fixture: ComponentFixture<DondathangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DondathangComponent]
    });
    fixture = TestBed.createComponent(DondathangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
