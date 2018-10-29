import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { UserService } from 'src/app/user.service';
import { remove } from 'lodash';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {
  public employees: User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList(){
    this.userService.getAllUsers()
    .then((data: User[]) => {
      this.filterAdmin(data);
    })
    .catch((data: any) => {});
  }

  filterAdmin(users: User[]){
    this.employees = remove(users, item => item.admin === true);
  }

}
