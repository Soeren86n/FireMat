import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { AuthService } from '../../auth/auth.service';
import { By } from '@angular/platform-browser';
import { MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavListComponent],
      imports: [MatIconModule, MatButtonModule, MatListModule, RouterTestingModule],
      providers: [AuthService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
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

  it('html should show Training Link when Auth', () => {
    component.isAuth = true;
    fixture.detectChanges();
    const trainingspan = fixture.debugElement.query(By.css('span')).nativeElement.innerText;
    expect(trainingspan).toEqual('Training');
  });

  it('html should show Logout Button when Auth', () => {
    component.isAuth = true;
    fixture.detectChanges();
    const logoutspans = fixture.debugElement.queryAll(By.css('span'));
    const logoutspan = logoutspans[logoutspans.length - 1].nativeElement.innerText;
    expect(logoutspan).toEqual('Logout');
  });

  it('html should show Login and Signup Link when not Auth', () => {
    component.isAuth = false;
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('span'));
    const logoutlink = debugElements[debugElements.length - 1].nativeElement.innerText;
    const traininglink = debugElements[debugElements.length - 2].nativeElement.innerText;
    expect(logoutlink).toEqual('Login');
    expect(traininglink).toEqual('Signup');
  });
});
