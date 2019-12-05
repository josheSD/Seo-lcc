import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public http:HttpClient 
  ) { }

  getHome():Observable<any>{
    let url = `${environment.API_URL}/home`;

    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>{
                        return resp.home;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

  postConvertirEsEnJson(body:any):Observable<any>{
    let url = `${environment.CONVERTIR}`;
    return this.http.post(url,body)
          .pipe(
            map((res:any)=>{
              return res;
            }),
            catchError((err:any)=>{
              return throwError(err);
            })
          )
  }

}
