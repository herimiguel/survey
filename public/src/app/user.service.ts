import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  retrieveU(){
    return this._http.get('/api/give').map(data => data.json()).toPromise();
  }

  sendU(user){
    return this._http.post('/api/create', user).map(data => data.json()).toPromise();
  }

  login(user){
    return this._http.post('/api/login', user).map(data => data.json()).toPromise();
  }

  grabU(){
    return this._http.get('/api/account').map(data => data.json()).toPromise();
  }

  sendApt(anw){
    return this._http.post('/api/add', anw).map(data => data.json()).toPromise();
  }

  // sendPoll(anw){
  //   console.log("unique survey!!")
  //   var context ={id: anw}
  //   return this._http.get('/api/addPoll').map(data => data.json()).toPromise();
  // }

  retrieveApt(){
    console.log("GETTINGSURVEY")
    return this._http.get('/api/surveys').map(data => data.json()).toPromise();
  }

  destroyApt(anw){
    console.log("in Service!!")
    var context ={id: anw}
    return this._http.post('/api/destroy', context).map(data => data.json()).toPromise();
  }

  logout(){
    return this._http.get('/api/out').map(data => data.json()).toPromise();
  }

}
