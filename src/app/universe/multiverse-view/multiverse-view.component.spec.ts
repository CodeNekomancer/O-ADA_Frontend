import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiverseViewComponent } from './multiverse-view.component';

describe('MultiverseViewComponent', () => {
  let component: MultiverseViewComponent;
  let fixture: ComponentFixture<MultiverseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiverseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiverseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
