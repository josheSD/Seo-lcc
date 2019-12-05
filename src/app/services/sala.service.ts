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
export class SalaService {

  constructor(
    public http:HttpClient
  ) { }

  getSalas():Observable<any>{
    let url = `${environment.API_URL}/sala`;
    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>{
                        return resp.sala;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

}
