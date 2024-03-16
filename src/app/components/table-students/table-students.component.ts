import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseServiceService } from '../../service/base-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEditStudentComponent } from '../student-editor/dialog-edit-student/dialog-edit-student.component';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Sort, MatSortModule} from '@angular/material/sort';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [
     CommonModule,
     MatTableModule,
     MatButtonModule,
     MatIconModule,
     MatDividerModule,
     MatDialogModule,
     MatPaginatorModule,
     MatSortModule,
     MatFormFieldModule
    ],
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})

export class TableStudentsComponent implements OnInit {
  students: Student[];
  displayedColumns: string[] = ['id', 'name', 'surname', 'actions'];
  dataSource: MatTableDataSource<Student>;
  pageSizeOptions: number[];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private baseService: BaseServiceService, public dialog: MatDialog ) {
    this.students = [];
    this.dataSource = new MatTableDataSource<Student>([]);
    this.pageSizeOptions = [5, 10, 20];
  }

  ngOnInit() {
    this.baseService.getAllStudents().subscribe(data => {
      this.students = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; // Set the sort after the view initilization
    });
  }

  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });

    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if (result != null) {
        console.log("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(newStudent => {
          // Assuming the server returns the newly created student with an ID
          this.students.push(newStudent);
          this.dataSource.data = [...this.students]; // Update dataSource
        });
      }
    });
  }

  deleteStudent(id: number | null) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '300px',
      data: 'Are you sure you want to delete this student?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && id !== null) {
        this.baseService.deleteStudent(id).subscribe(() => {
          this.students = this.students.filter(student => student.id !== id);
          this.dataSource.data = [...this.students]; // Update dataSource
        });
      }
    });
  }

  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(DialogEditStudentComponent, {
      width: '400px',
      data: student
    });

    dialogRef.afterClosed().subscribe((result: Student) => {
      if (result) {
        // Update student data on the server
        this.baseService.updateStudent(result).subscribe(updatedStudent => {
          // Update local students array
          const index = this.students.findIndex(s => s.id === updatedStudent.id);
          this.baseService.getAllStudents().subscribe(data => this.students = data);
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(event: PageEvent) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
  }
}
