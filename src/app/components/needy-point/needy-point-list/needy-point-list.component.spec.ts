import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyPointListComponent } from './needy-point-list.component';

describe('NeedyPointListComponent', () => {
  let component: NeedyPointListComponent;
  let fixture: ComponentFixture<NeedyPointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedyPointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyPointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
