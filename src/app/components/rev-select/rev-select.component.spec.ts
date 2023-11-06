import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevSelectComponent } from './rev-select.component';

describe('RevSelectComponent', () => {
  let component: RevSelectComponent;
  let fixture: ComponentFixture<RevSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevSelectComponent]
    });
    fixture = TestBed.createComponent(RevSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
