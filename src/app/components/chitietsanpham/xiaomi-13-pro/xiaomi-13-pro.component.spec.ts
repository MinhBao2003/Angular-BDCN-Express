import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xiaomi13ProComponent } from './xiaomi-13-pro.component';

describe('Xiaomi13ProComponent', () => {
  let component: Xiaomi13ProComponent;
  let fixture: ComponentFixture<Xiaomi13ProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Xiaomi13ProComponent]
    });
    fixture = TestBed.createComponent(Xiaomi13ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
