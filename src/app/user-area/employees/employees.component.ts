import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/user.service';
import { remove } from 'lodash';
import { ErrorHandlerService } from '../../error-handler.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {
  public employees: User[];
  public conectionError: boolean
  constructor(
    private userService: UserService,
    private errorService: ErrorHandlerService
    ) { }

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList(){
    this.userService.getAllUsers()
    .subscribe(
      data => this.filterEmployee(data),
      error => this.errorService.error.subscribe(state => this.conectionError = state)
      )
    }

  filterEmployee(users: any){
    let employees = users.usuarios
    this.employees = remove(employees, item => item.admin);
    this.employees = remove(employees, item => !item.funcionario);
    this.employees = employees
  }

  deleteUser(id: string): void{
    this.userService.deleteUser(id).subscribe(
      data => this.getUsersList()
    )
  }

}

