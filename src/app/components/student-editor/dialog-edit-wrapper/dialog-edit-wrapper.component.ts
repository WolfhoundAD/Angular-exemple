import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-dialog-edit-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrl: './dialog-edit-wrapper.component.css'
})
export class DialogEditWrapperComponent {

  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) { }

}
