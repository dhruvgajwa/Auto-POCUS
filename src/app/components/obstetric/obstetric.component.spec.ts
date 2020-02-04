import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetricComponent } from './obstetric.component';

describe('ObstetricComponent', () => {
  let component: ObstetricComponent;
  let fixture: ComponentFixture<ObstetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
