import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { TryOnComponent } from './try-on.component';
import { routingComponents, routes, AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
describe('TryOnComponent', () => {
  let component: TryOnComponent;
  let fixture: ComponentFixture<TryOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ TryOnComponent, routingComponents ]
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

  it('should contain "try-on works!"', () => {
    const tryonElement: HTMLElement = fixture.nativeElement;
    expect(tryonElement.textContent).toContain('try-on works!');
  });

  it('should navigate to /take-a-pic path on button click', () => {
    const location = TestBed.get(Location);
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    nativeButton.click();
    fixture.detectChanges();
    fixture.whenStable().then( () => {
      expect(location.path()).toBe('/takeapic');
    });
  });
});


