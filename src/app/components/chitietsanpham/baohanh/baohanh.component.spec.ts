import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaohanhComponent } from './baohanh.component';

describe('BaohanhComponent', () => {
  let component: BaohanhComponent;
  let fixture: ComponentFixture<BaohanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaohanhComponent]
    });
    fixture = TestBed.createComponent(BaohanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
