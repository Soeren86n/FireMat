import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TestSpecModule } from '../../module.spec';
import { WelcomeComponent } from '../../welcome/welcome.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { LoginComponent } from '../../auth/login/login.component';
import { TrainingComponent } from '../../training/training.component';
import { NewTrainingComponent } from '../../training/new-training/new-training.component';
import { PastTrainingsComponent } from '../../training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from '../../training/current-training/current-training.component';
import { APP_BASE_HREF } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          HeaderComponent,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
