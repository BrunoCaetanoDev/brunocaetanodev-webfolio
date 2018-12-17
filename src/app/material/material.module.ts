import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatProgressSpinnerModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: []
})
export class MaterialModule { }
