import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { StartComponent } from './start.component';
import { routingComponents, routes, AppRoutingModule } from '../../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ StartComponent, routingComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "start works!"', () => {
    const startElement: HTMLElement = fixture.nativeElement;
    expect(startElement.textContent).toContain('start works!');
  });

  it('should navigate to /tryon path on button click', () => {
    const location = TestBed.get(Location);
    const linkDes = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = linkDes[0].nativeElement;
    nativeButton.click();
    fixture.detectChanges();
    fixture.whenStable().then( () => {
      expect(location.path()).toBe('/tryon');
    });
  });
});
