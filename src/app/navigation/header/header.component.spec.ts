import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../auth/auth.service';
import { By } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterTestingModule],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('component should trigger AuthService Logout on Logout', () => {
    const spy = spyOn(service, 'logout');
    component.onLogout();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('html should show Logout and Training Link when Auth', () => {
    component.isAuth = true;
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('a'));
    const logoutlink = debugElements[debugElements.length - 1].nativeElement.innerText;
    const traininglink = debugElements[debugElements.length - 2].nativeElement.innerText;
    expect(logoutlink).toEqual('Logout');
    expect(traininglink).toEqual('Training');
  });

  it('html should show Login and Signup Link when not Auth', () => {
    component.isAuth = false;
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('a'));
    const logoutlink = debugElements[debugElements.length - 1].nativeElement.innerText;
    const traininglink = debugElements[debugElements.length - 2].nativeElement.innerText;
    expect(logoutlink).toEqual('Login');
    expect(traininglink).toEqual('Signup');
  });

  it('html should call Func Logout on Logout Link', () => {
    spyOn(component, 'onLogout');
    component.isAuth = true;
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('a'));
    // const debugElements = fixture.debugElement.queryAll(By.css('ul>li:nth-last-of-type(1)>a'));
    const logoutlink = debugElements[debugElements.length - 1].nativeElement;
    logoutlink.click();
    expect(component.onLogout).toHaveBeenCalledTimes(1);
  });
});
