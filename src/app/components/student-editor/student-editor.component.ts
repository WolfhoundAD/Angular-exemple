import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-editor.component.html',
  styleUrl: './student-editor.component.css'
})
export class StudentEditorComponent implements OnInit{
name = 'name';
surname = 'surname';

constructor() {}
ngOnInit(): void {

}
}
