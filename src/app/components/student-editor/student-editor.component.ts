import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-editor.component.html',
  styleUrl: './student-editor.component.css'
})
export class StudentEditorComponent implements OnInit{
editingStudent: Student;

constructor() {
  this.editingStudent =new Student();
}
ngOnInit(): void {

}
}
