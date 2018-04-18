import { ExerciseModel } from './exercise.model';
import { Subject } from 'rxjs/Subject';

export class TrainingService {
  exerciseChanged = new Subject<ExerciseModel>();
  private availableExercises: ExerciseModel[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 10 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 16 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runningExercise: ExerciseModel;

  getAvailableExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedID: string) {
    this.runningExercise = this.availableExercises.find((ex) => ex.id === selectedID);
    this.exerciseChanged.next({ ...this.runningExercise });
  }
}
