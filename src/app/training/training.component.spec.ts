import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { TestSpecModule } from '../module.spec';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { TrainingService } from './training.service';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          TrainingComponent,
          NewTrainingComponent,
          PastTrainingsComponent,
          CurrentTrainingComponent,
          SignupComponent,
          LoginComponent,
        ],
        imports: [TestSpecModule],
        providers: [TrainingService],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
