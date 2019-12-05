import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    public http: HttpClient
  ) { }

  getMenu():Observable<any>{
    let url = `${environment.API_URL}/menu`;
    return this.http.get(url)
                    .pipe(
                      map((res:any)=>{
                        return res.menu;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

}
