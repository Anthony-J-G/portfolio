import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalWindowComponent } from './terminal-window.component';

describe('TerminalWindowComponent', () => {
  let component: TerminalWindowComponent;
  let fixture: ComponentFixture<TerminalWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalWindowComponent]
    });
    fixture = TestBed.createComponent(TerminalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
