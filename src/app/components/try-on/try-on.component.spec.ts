import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryOnComponent } from './try-on.component';

describe('TryOnComponent', () => {
  let component: TryOnComponent;
  let fixture: ComponentFixture<TryOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
