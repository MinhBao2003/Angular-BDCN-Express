import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonhuyComponent } from './donhuy.component';

describe('DonhuyComponent', () => {
  let component: DonhuyComponent;
  let fixture: ComponentFixture<DonhuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonhuyComponent]
    });
    fixture = TestBed.createComponent(DonhuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
