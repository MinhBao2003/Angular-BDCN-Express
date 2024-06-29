import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoocqqComponent } from './coocqq.component';

describe('CoocqqComponent', () => {
  let component: CoocqqComponent;
  let fixture: ComponentFixture<CoocqqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoocqqComponent]
    });
    fixture = TestBed.createComponent(CoocqqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
