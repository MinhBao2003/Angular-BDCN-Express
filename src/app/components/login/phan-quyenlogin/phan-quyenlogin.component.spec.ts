import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanQuyenloginComponent } from './phan-quyenlogin.component';

describe('PhanQuyenloginComponent', () => {
  let component: PhanQuyenloginComponent;
  let fixture: ComponentFixture<PhanQuyenloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhanQuyenloginComponent]
    });
    fixture = TestBed.createComponent(PhanQuyenloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
