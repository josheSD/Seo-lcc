import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatSnackBarModule
}  from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
