import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Student } from '../../../models/student';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-wrapper',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule ], // Импортируйте необходимые модули
  templateUrl: './dialog-edit-wrapper.component.html',
  styleUrls: ['./dialog-edit-wrapper.component.css']
})
export class DialogEditWrapperComponent {
  editingStudent: Student;
  constructor(public dialogRef: MatDialogRef<DialogEditWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
    ) {
      this.editingStudent = new Student();
      }

     ngOnInit(): void {
     }

     onNoClick(): void {
      this.dialogRef.close();
    }
}
