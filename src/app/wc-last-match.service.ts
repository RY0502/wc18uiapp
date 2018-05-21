import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { environment } from '../environments/environment';

@Injectable()
export class WcLastMatchService {

  private lastMatchUrl = environment.baseurl + environment.lastfixtureurl;

  getLastMatch(): Observable<any> {
    return this.http.get<any>(this.lastMatchUrl)
      .map(res => {
      const temp = res[0];
      // temp = temp.matchdate;
      console.log('temp value: ' + temp);
      return temp;
    })
      .pipe(catchError(this.handleError('getLastMatchDate', null))
    );
  }

  constructor( private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
