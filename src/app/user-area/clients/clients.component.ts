import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { remove } from 'lodash';
import { ErrorHandlerService } from 'src/app/error-handler.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  public clients: User[];
  public conectionError: boolean;
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
       data => this.filterClients(data),
       error => this.errorService.error.subscribe(state => this.conectionError = state)
    )
  }

 filterClients(users: any){
    let user = users.usuarios
    this.clients = remove(user, item => (!item.funcionario || item.funcionario === undefined) && !item.admin);
  }

  deleteUser(id: string): void{
    this.userService.deleteUser(id).subscribe(
      data => {let x = data}
    )
  }

}
