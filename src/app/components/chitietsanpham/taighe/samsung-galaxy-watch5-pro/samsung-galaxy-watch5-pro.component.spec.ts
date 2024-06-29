import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungGalaxyWatch5ProComponent } from './samsung-galaxy-watch5-pro.component';

describe('SamsungGalaxyWatch5ProComponent', () => {
  let component: SamsungGalaxyWatch5ProComponent;
  let fixture: ComponentFixture<SamsungGalaxyWatch5ProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamsungGalaxyWatch5ProComponent]
    });
    fixture = TestBed.createComponent(SamsungGalaxyWatch5ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
