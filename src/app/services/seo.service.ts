import { Injectable } from '@angular/core';
import { Meta ,Title  } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  public data:{titulo:null,description:null};

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  generateTags(){

    this.router.events.pipe(
        filter(event => event instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null ),
        map( (evento: ActivationEnd) => evento.snapshot.data )
      ).subscribe((data:any) => {
        let titulo:string;
        if(data.titulo == ''){
          titulo = `lcc`
        }else{
          titulo = `${data.titulo} - lcc`
        }

        this.title.setTitle(titulo);

        this.meta.updateTag({name:'robots',content:'INDEX,FOLLOW'});
        this.meta.updateTag({name:'keywords',content:'lcc espacios, lima cargo city espacios'});

        this.meta.updateTag({name:'twitter:card', content:'summary'});
        this.meta.updateTag({name:'twitter:site', content:'@ni-ng'});
        this.meta.updateTag({name:'twitter:title', content:data.titulo});
        this.meta.updateTag({name:'twitter:description', content:data.description});

        this.meta.updateTag({property:'og:type', content:'article'});
        this.meta.updateTag({property:'og:site_name', content:'mi-ng'});
        this.meta.updateTag({property:'og:title', content:data.titulo});
        this.meta.updateTag({property:'og:description', content:data.description});
        this.meta.updateTag({property:'og:url', content:`${environment.WEB_URL}/${data.slug}`});

      });

  }


}
