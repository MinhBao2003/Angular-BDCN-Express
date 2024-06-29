import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChataoComponent } from './chatao.component';

describe('ChataoComponent', () => {
  let component: ChataoComponent;
  let fixture: ComponentFixture<ChataoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChataoComponent]
    });
    fixture = TestBed.createComponent(ChataoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
