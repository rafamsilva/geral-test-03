import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
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
    .subscribe((data)=>{
      this.filterEmployee(data)
    })
  }

 filterEmployee(users: User[]){
    this.employees = remove(users, item => (item.funcionario || item.funcionario !== undefined) && !item.admin );
  }

}
