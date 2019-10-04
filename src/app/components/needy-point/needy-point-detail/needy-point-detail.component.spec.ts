import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyPointDetailComponent } from './needy-point-detail.component';

describe('NeedyPointDetailComponent', () => {
  let component: NeedyPointDetailComponent;
  let fixture: ComponentFixture<NeedyPointDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedyPointDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedyPointDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
