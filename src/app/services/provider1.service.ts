import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Provider1Service {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
