import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { BaseServiceService } from '../../service/base-service.service';

@Component({
  selector: 'app-student-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-editor.component.html',
  styleUrl: './student-editor.component.css'
})
export class StudentEditorComponent implements OnInit{
editingStudent: Student;

constructor(private baseService: BaseServiceService) {
  this.editingStudent = new Student();
}

ngOnInit(): void {}

addStudent(): void {
  this.baseService.addNewStudent(this.editingStudent);
  this.editingStudent = new Student();
}

}
