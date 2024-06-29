import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplewatchComponent } from './applewatch.component';

describe('ApplewatchComponent', () => {
  let component: ApplewatchComponent;
  let fixture: ComponentFixture<ApplewatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplewatchComponent]
    });
    fixture = TestBed.createComponent(ApplewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
