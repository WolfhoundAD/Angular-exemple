import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseServiceService } from '../../service/base-service.service';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})

export class TableStudentsComponent implements OnInit {
  students: Student[];

  constructor(private baseService: BaseServiceService) {
    this.students = [];
  }

  ngOnInit(): void {
    console.log("TableStudentsComponent");
    this.students = this.baseService.getAllStudents();
  }

}
