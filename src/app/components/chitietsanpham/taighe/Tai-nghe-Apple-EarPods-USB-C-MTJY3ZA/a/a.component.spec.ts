import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponent } from './a.component';

describe('AComponent', () => {
  let component: AComponent;
  let fixture: ComponentFixture<AComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AComponent]
    });
    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
