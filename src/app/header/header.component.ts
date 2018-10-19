import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  ElementRef } from '@angular/core';
  import { Router } from '@angular/router'

  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
  })
  export class HeaderComponent implements OnInit {

    @ViewChild('btnClear') btnClear: ElementRef;
    public userName: string = "Danillo";
    public isLogged: boolean = false;
    public userType: number = 1


    constructor(
      private route: Router,
      private render: Renderer2
      ) { }

      ngOnInit() {

      }

      public enterUserArea(): void{
        this.route.navigate(['/area-do-usuario'])
        this.render.setAttribute(this.btnClear.nativeElement,'data-dismiss','modal')
        this.isLogged = true
      }

    }
