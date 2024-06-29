import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerComponent } from './acer.component';

describe('AcerComponent', () => {
  let component: AcerComponent;
  let fixture: ComponentFixture<AcerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcerComponent]
    });
    fixture = TestBed.createComponent(AcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
