import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 1, name: 'Иван', surname: 'Иванов'},
      {id: 2, name: 'Мария', surname: 'Петрова'},
      {id: 3, name: 'Петр', surname: 'Сидоров'},
      {id: 4, name: 'Алексей', surname: 'Кузнецов'},
      {id: 5, name: 'Александр', surname: 'Попов'},
      {id: 6, name: 'Артём', surname: 'Васильев'},
      {id: 7, name: 'Олег', surname: 'Соколов'},
      {id: 8, name: 'Анатолий', surname: 'Лебедев'},
      {id: 9, name: 'Максим', surname: 'Козлов'},
      {id: 10, name: 'Дмитрий', surname: 'Новиков'}
    ];
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id ? student.id : 0)) + 1 : 11;
  }

}
