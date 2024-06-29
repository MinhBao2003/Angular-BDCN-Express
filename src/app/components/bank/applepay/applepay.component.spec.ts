import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplepayComponent } from './applepay.component';

describe('ApplepayComponent', () => {
  let component: ApplepayComponent;
  let fixture: ComponentFixture<ApplepayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplepayComponent]
    });
    fixture = TestBed.createComponent(ApplepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
