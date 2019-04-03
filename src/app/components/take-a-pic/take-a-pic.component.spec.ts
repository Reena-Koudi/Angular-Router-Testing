import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAPicComponent } from './take-a-pic.component';

describe('TakeAPicComponent', () => {
  let component: TakeAPicComponent;
  let fixture: ComponentFixture<TakeAPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
