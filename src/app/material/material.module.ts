import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
