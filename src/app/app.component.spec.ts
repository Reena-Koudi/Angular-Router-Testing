import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet, Router, RouterLinkWithHref, Routes } from '@angular/router';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { routingComponents, routes, AppRoutingModule } from './app-routing.module';
describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent,
        routingComponents
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-Router-Testing'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular-Router-Testing');
  });

  it('should have a router outlet', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  it('navigate to "" redirects you to /', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('navigate to "Try On" redirects you to /tryon', fakeAsync(() => {
    router.navigate(['tryon']);
    tick();
    expect(location.path()).toBe('/tryon');
  }));

  it('navigate to "Take A Pic" redirects you to /takeapic', fakeAsync(() => {
    router.navigate(['takeapic']);
    tick();
    expect(location.path()).toBe('/takeapic');
  }));

});
