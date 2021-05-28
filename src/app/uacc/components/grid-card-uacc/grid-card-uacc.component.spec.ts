import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardUaccComponent } from './grid-card-uacc.component';

describe('GridCardUaccComponent', () => {
  let component: GridCardUaccComponent;
  let fixture: ComponentFixture<GridCardUaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCardUaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCardUaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
