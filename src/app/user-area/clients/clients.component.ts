import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
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
    .then((data: User[]) => {
      this.filterClients(data)
    })
    .catch((data: any) => {});
  }

 filterClients(users: User[]){
    this.clients = remove(users, item => item.admin === false);
  }

}
