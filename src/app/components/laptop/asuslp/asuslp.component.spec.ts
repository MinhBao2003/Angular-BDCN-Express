import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuslpComponent } from './asuslp.component';

describe('AsuslpComponent', () => {
  let component: AsuslpComponent;
  let fixture: ComponentFixture<AsuslpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsuslpComponent]
    });
    fixture = TestBed.createComponent(AsuslpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
