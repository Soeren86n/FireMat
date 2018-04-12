import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestSpecModule } from './module.spec';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { APP_BASE_HREF } from '@angular/common';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { AuthService } from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          SignupComponent,
          LoginComponent,
          TrainingComponent,
          SidenavListComponent,
          HeaderComponent,
          NewTrainingComponent,
          PastTrainingsComponent,
          CurrentTrainingComponent,
        ],
        imports: [TestSpecModule, AppRoutingModule],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, AuthService],
      }).compileComponents();
    }),
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );
});
