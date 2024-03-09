import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { TableStudentsComponent } from './components/table-students/table-students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, StudentEditorComponent, TableStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alexander';
}
