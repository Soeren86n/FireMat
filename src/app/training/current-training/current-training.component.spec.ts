import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTrainingComponent } from './current-training.component';
import { TestSpecModule } from '../../module.spec';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { LoginComponent } from '../../auth/login/login.component';
import { TrainingComponent } from '../training.component';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingsComponent } from '../past-trainings/past-trainings.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

describe('CurrentTrainingComponent', () => {
  let component: CurrentTrainingComponent;
  let fixture: ComponentFixture<CurrentTrainingComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CurrentTrainingComponent,
          SignupComponent,
          LoginComponent,
          TrainingComponent,
          NewTrainingComponent,
          PastTrainingsComponent,
        ],
        imports: [TestSpecModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
