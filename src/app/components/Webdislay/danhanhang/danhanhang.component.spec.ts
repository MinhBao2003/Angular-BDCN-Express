import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhanhangComponent } from './danhanhang.component';

describe('DanhanhangComponent', () => {
  let component: DanhanhangComponent;
  let fixture: ComponentFixture<DanhanhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhanhangComponent]
    });
    fixture = TestBed.createComponent(DanhanhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
