import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingComponent } from './new-training.component';
import { TestSpecModule } from '../../module.spec';
import { SignupComponent } from '../../auth/signup/signup.component';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { LoginComponent } from '../../auth/login/login.component';
import { TrainingComponent } from '../training.component';
import { PastTrainingsComponent } from '../past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../current-training/current-training.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { TrainingService } from '../training.service';

describe('NewTrainingComponent', () => {
  let component: NewTrainingComponent;
  let fixture: ComponentFixture<NewTrainingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          NewTrainingComponent,
          SignupComponent,
          LoginComponent,
          TrainingComponent,
          PastTrainingsComponent,
          CurrentTrainingComponent,
        ],
        imports: [TestSpecModule],
        providers: [TrainingService],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
