import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleWatchUltraComponent } from './apple-watch-ultra.component';

describe('AppleWatchUltraComponent', () => {
  let component: AppleWatchUltraComponent;
  let fixture: ComponentFixture<AppleWatchUltraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppleWatchUltraComponent]
    });
    fixture = TestBed.createComponent(AppleWatchUltraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
