import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-dialog-edit-student',
  standalone: true,
  imports: [FormsModule, MatInputModule],
  templateUrl: './dialog-edit-student.component.html',
  styleUrls: ['./dialog-edit-student.component.css']
})
export class DialogEditStudentComponent {
  editingStudent: Student;

  constructor(
    public dialogRef: MatDialogRef<DialogEditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student
  ) {
    // Если передан объект Student, копируем его, чтобы не изменять исходные данные
    if (data) {
      this.editingStudent = { ...data };
    } else {
      this.editingStudent = new Student();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.editingStudent);
  }
}
