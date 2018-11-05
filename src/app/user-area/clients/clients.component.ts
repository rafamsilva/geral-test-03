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

 filterClients(users: any){
   let user = users.usuarios
    this.clients = remove(user, item => item.funcionario === false || item.funcionario === undefined );
  }

  deleteUser(id: string): void{
    this.userService.deleteUser(id).subscribe(
      data => {let x = data}
    )
  }

}
