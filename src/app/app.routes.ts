import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStudentsComponent } from './components/table-students/table-students.component';

export const routes: Routes = [
//    { path: 'api/students', component: TableStudentsComponent },
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{
}
