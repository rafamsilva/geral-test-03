import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { remove } from 'lodash';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  public clients: User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList(){
    this.userService.getAllUsers()
    .subscribe((data)=>{
      this.filterClients(data)
    })
  }

 filterClients(users: User[]){
    this.clients = remove(users, item => item.funcionario === false);
  }

}
