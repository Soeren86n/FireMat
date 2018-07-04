import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { MatCardModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule, MatTabsModule } from '@angular/material';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { FormsModule } from '@angular/forms';
import { TrainingService } from './training.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingComponent, NewTrainingComponent, PastTrainingsComponent, CurrentTrainingComponent],
      imports: [
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        FormsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
      ],
      providers: [TrainingService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
