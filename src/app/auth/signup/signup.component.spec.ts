import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { TestSpecModule } from '../../module.spec';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { TrainingComponent } from '../../training/training.component';
import { NewTrainingComponent } from '../../training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../../training/current-training/current-training.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../auth.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
