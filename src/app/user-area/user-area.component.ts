import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.less']
})
export class UserAreaComponent implements OnInit {
  public userType: number;

  constructor(public userService: UserService) { }

  ngOnInit(): void{
    this.getUserData()
  }

  getUserData(): void{
    this.userService.getUser().subscribe((data)=>{
      console.log('email', data)
      console.log('tipo',data.funcionario)
      this.checkUserTyper(data)
    })
  }

  checkUserTyper(user: User): void{
    console.log('admin',user[0].admin)
    console.log('funcionario',user[0].funcionario)
    if(user[0].admin){
      this.userType =  3;
    }else if(user[0].funcionario){
      this.userType = 2;
    }else{
      this.userType = 1;
    }
    console.log('after',this.userType)
  }

}
