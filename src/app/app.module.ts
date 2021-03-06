import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatTableModule} from '@angular/material/table';
import {MatIconModule,MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { EmployeeComponent } from './employee/employee.component';
import { EditEmpComponent } from './Employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { ShowEmpComponent } from './Employee/show-emp/show-emp.component';

import { DepartmentComponent } from './department/department.component';
import { EditDepComponent } from './Department/edit-dep/edit-dep.component';
import { AddDepComponent } from './Department/add-dep/add-dep.component';
import { ShowDepComponent } from './Department/show-dep/show-dep.component';





import {DepartmentService} from 'src/app/services/department.service';
import {EmployeeService} from 'src/app/services/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditEmpComponent,
    AddEmpComponent,
    ShowEmpComponent,
    DepartmentComponent,
    EditDepComponent,
    AddDepComponent,
    
    ShowDepComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatIconModule,MatButtonModule
  ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
