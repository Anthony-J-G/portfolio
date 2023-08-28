import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdoutComponent } from './stdout.component';

describe('StdoutComponent', () => {
  let component: StdoutComponent;
  let fixture: ComponentFixture<StdoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StdoutComponent]
    });
    fixture = TestBed.createComponent(StdoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
