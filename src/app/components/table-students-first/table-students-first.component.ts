import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseServiceService } from '../../service/base-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';

@Component({
  selector: 'app-table-students-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-students-first.component.html',
  styleUrl: './table-students-first.component.css'
})
export class TableStudentsFirstComponent implements OnInit {
  students: Student[];

  constructor(private baseService: BaseServiceService, public dialog: MatDialog) {
    this.students = [];

  }

  ngOnInit() {
    console.log("TableStudentsComponent");
    this.baseService.getAllStudents().subscribe(data => this.students = data);
  }

  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });

    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.baseService.getAllStudents().subscribe(data => this.students = data) );
      }
    });
  }

  deleteStudent(id: number | null) {
    if (id !== null) {
      this.baseService.deleteStudent(id).subscribe(() => {
        this.students = this.students.filter(student => student.id !== id);
      });
    }
  }
}
