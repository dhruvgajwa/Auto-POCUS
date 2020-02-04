import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTraumaComponent } from './ptrauma.component';

describe('PTraumaComponent', () => {
  let component: PTraumaComponent;
  let fixture: ComponentFixture<PTraumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTraumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTraumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
