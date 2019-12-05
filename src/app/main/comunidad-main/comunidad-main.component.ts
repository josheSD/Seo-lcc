import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-comunidad-main',
  templateUrl: './comunidad-main.component.html',
  styles: []
})
export class ComunidadMainComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  routerEspacios(){
    this.router.navigate(['/espacios']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    }

    $('#lli6').addClass('colorN');
  }

  routerSalas(){
    this.router.navigate(['/salas']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    }
    $('#lli7').addClass('colorN');
  }

  routerEscribenos(){
    this.router.navigate(['/escribenos']);
    let navLinkTable = $('#menu-principal .nav-link');
      for(let link of navLinkTable){
        if($(link).hasClass('colorN')){
          $(link).removeClass('colorN');
        }
    }
    $('#lli10').addClass('colorN');
  }

}
