import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,MatIconModule,MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor() { }

  listData: MatTableDataSource<any>;
  displayeColoumn: string[] = ['DepartmentID', 'DepartmentName', 'Options'];


  ngOnInit() {
  }

}
