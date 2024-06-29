import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SangsungtvComponent } from './sangsungtv.component';

describe('SangsungtvComponent', () => {
  let component: SangsungtvComponent;
  let fixture: ComponentFixture<SangsungtvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SangsungtvComponent]
    });
    fixture = TestBed.createComponent(SangsungtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
