import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TestSpecModule } from '../../module.spec';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { SignupComponent } from '../signup/signup.component';
import { TrainingComponent } from '../../training/training.component';
import { NewTrainingComponent } from '../../training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../../training/current-training/current-training.component';
import { AuthService } from '../auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoginComponent,
          SignupComponent,
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
