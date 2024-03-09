import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {
  students: Student[];

  constructor() {
    this.students = [
      {id:0, name: 'Имя', surname: 'Фамилия'},
      {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
      {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
    ];
  }
  ngOnInit() {}
}
