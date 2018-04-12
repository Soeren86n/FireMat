import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { TestSpecModule } from '../../module.spec';
import { SignupComponent } from '../../auth/signup/signup.component';
import { LoginComponent } from '../../auth/login/login.component';
import { TrainingComponent } from '../../training/training.component';
import { NewTrainingComponent } from '../../training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../../training/current-training/current-training.component';
import { AuthService } from '../../auth/auth.service';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let service: AuthService;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          SidenavListComponent,
          SignupComponent,
          LoginComponent,
          TrainingComponent,
          NewTrainingComponent,
          PastTrainingsComponent,
          CurrentTrainingComponent,
        ],
        imports: [TestSpecModule],
        providers: [AuthService],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger AuthService Logout on Logout', () => {
    const spy = spyOn(service, 'logout');
    component.onLogout();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
