import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Realme11Pro8GB256GBComponent } from './realme-11-pro-8-gb-256-gb.component';

describe('Realme11Pro8GB256GBComponent', () => {
  let component: Realme11Pro8GB256GBComponent;
  let fixture: ComponentFixture<Realme11Pro8GB256GBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Realme11Pro8GB256GBComponent]
    });
    fixture = TestBed.createComponent(Realme11Pro8GB256GBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
