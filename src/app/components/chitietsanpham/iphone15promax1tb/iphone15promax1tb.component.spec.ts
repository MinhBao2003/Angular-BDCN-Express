import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone15promax1tbComponent } from './iphone15promax1tb.component';

describe('Iphone15promax1tbComponent', () => {
  let component: Iphone15promax1tbComponent;
  let fixture: ComponentFixture<Iphone15promax1tbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iphone15promax1tbComponent]
    });
    fixture = TestBed.createComponent(Iphone15promax1tbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
