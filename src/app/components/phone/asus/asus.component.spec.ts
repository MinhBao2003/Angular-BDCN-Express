import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsusComponent } from './asus.component';

describe('AsusComponent', () => {
  let component: AsusComponent;
  let fixture: ComponentFixture<AsusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsusComponent]
    });
    fixture = TestBed.createComponent(AsusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
