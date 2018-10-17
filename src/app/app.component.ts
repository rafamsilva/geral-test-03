import { Component, OnInit } from '@angular/core';

import { chunk, map } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'imobiliaria-project';

  ngOnInit(): void{
      let x = [1,2,3,4,5,6]
      console.log(chunk(x,2))
      map(x, (e)=>{
        console.log(e+2)
      })
  }

}
