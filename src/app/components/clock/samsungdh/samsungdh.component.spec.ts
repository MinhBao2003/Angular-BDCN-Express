import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungdhComponent } from './samsungdh.component';

describe('SamsungdhComponent', () => {
  let component: SamsungdhComponent;
  let fixture: ComponentFixture<SamsungdhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamsungdhComponent]
    });
    fixture = TestBed.createComponent(SamsungdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
