import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/user.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  public users: User[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList(){
    this.userService.getAllUsers()
    .then((data: User[]) => {
      this.users = data;
      console.log(this.users)
    })
    .catch((data: any) => {});
  }

}
