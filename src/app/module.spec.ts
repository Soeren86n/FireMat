import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [MaterialModule, FlexLayoutModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, AppRoutingModule],
  exports: [MaterialModule, FlexLayoutModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TrainingService],
})
export class TestSpecModule {}
