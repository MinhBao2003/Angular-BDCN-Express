import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookProComponent } from './macbook-pro.component';

describe('MacbookProComponent', () => {
  let component: MacbookProComponent;
  let fixture: ComponentFixture<MacbookProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacbookProComponent]
    });
    fixture = TestBed.createComponent(MacbookProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
