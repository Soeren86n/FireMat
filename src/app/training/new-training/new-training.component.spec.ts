import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingComponent } from './new-training.component';
import { MatCardModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TrainingService } from '../training.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewTrainingComponent', () => {
  let component: NewTrainingComponent;
  let fixture: ComponentFixture<NewTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewTrainingComponent],
      imports: [MatCardModule, MatSelectModule, FormsModule, BrowserAnimationsModule],
      providers: [TrainingService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
