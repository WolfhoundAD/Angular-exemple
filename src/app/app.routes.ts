import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { BaseServiceService } from './service/base-service.service';

export const routes: Routes = [
//    { path: 'api/students', component: TableStudentsComponent },
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{
}
