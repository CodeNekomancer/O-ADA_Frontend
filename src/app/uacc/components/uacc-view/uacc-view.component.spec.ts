import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UAccViewComponent } from './uacc-view.component';

describe('UAccViewComponent', () => {
  let component: UAccViewComponent;
  let fixture: ComponentFixture<UAccViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UAccViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UAccViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
