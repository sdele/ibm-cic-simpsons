import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsApiService {

  simpsonBaseApi = 'https://simpsons-quotes-api.herokuapp.com/quotes';

  constructor(private http: HttpClient) {}


  /**
   * Return 10 Simpsons results
   */
  getSimpsonsQuotes() {
    return this.http.get(this.simpsonBaseApi + '?count=10');
  }



}
