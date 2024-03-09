import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  students: Student[] = [
    {id: 0, name: 'Имя', surname: 'Фамилия'},
    {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
    {id: 2, name: 'Имя 2', surname: 'Фамилия 2'}
  ];

  constructor() { }

  getAllStudents(): Student[] {
    console.log('count of students' + this.students.length);
    return this.students;
  }

  addNewStudent(student: Student): void {
    console.log('addNewStudent');
    this.students.push(student);
  }

}
