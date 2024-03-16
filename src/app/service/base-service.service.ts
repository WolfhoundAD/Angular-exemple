import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseServiceService {
  private baseUrl = 'http://localhost:4200/';
  private studentsUrl = this.baseUrl + 'api/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addNewStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student);
  }

  deleteStudent(id: number): Observable<any> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.delete(url);
  }

  updateStudent(student: Student): Observable<any> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put<Student>(url, student);
  }
}
