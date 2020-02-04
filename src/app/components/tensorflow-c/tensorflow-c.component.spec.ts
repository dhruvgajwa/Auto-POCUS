import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorflowCComponent } from './tensorflow-c.component';

describe('TensorflowCComponent', () => {
  let component: TensorflowCComponent;
  let fixture: ComponentFixture<TensorflowCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensorflowCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorflowCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
