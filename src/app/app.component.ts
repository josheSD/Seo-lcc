import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { IdiomasService } from './services/idiomas.service';
import { SeoService } from './services/seo.service';
import { Title } from '@angular/platform-browser';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public subscription : Subscription;
  public langs:string[] = [];
  label: string = '';

  constructor(
    private router : Router,
    public translate: TranslateService,
    public _idiomaService: IdiomasService,
    public _seoService: SeoService,
    public title: Title,
  ){
    this.PerfectNavigationTop();
    this.inicializarTraduccion();
  }
  
  ngOnInit(){
    this.getIdiomasBackend();
    this._seoService.generateTags();
  }

  inicializarTraduccion(){
    this.translate.setDefaultLang('es');
    this.translate.use('es');

    this.translate.addLangs(['es','en']);
    this.langs = this.translate.getLangs();

  }

  getIdiomasBackend(){
    let fd = new FormData();

    this._idiomaService.getIdiomas()
          .subscribe(data=>{
            if(data){

              fd.append('en_json',JSON.stringify(data.Eng));
              fd.append('es_json',JSON.stringify(data.Esp));

              this._idiomaService.postConvertirEsEnJson(fd)
                    .subscribe(resp =>{
                      console.log(resp)
              })

            }
          },
          err=> console.log(err))
  }

  changeLang(lang:string){
    this.translate.use(lang);
  }

  PerfectNavigationTop(){
    this.subscription =  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => {
      if($('#navbar').width() <= 735 && $('.navbar-collapse').hasClass('show')){
        $('#btn-collap').trigger('click');
      }
      window.scrollTo(0,0);
    });
  }

}
