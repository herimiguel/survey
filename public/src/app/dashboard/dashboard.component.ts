import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Survey } from '../survey';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = {};
  surveys;
  anw = new Survey();
  constructor(private _userService: UserService, private _router: Router ) { }


  ngOnInit() {
    this.currentU();
    console.log(" CHECK!!")
    console.log(this.user)
    this.grabApts();
  }

  currentU(){
    this._userService.grabU().then(user => this.user = user).catch(err => console.log(err));
  }


  toLogout(){
    console.log("logged out");
    
    this._userService.logout().then(response => {this._router.navigateByUrl('/');}).catch(err => console.log(err));

  }

    grabApts(){
    this._userService.retrieveApt().then(anw => this.surveys = anw).catch(err => console.log(err));
  }

  
  deleteApt(anw){
    console.log(anw);
    this._userService.destroyApt(anw).then(response => console.log("Deleting!!")).catch(err => console.log(err));
    this.grabApts();
  }

  // thisPoll(anw){
  //   console.log(anw);    
  //   this._userService.sendPoll(this.anw).then(response => {this._router.navigateByUrl("/toResult");}).catch(err => console.log(err));
  //   this.grabApts();
  // }

  makeSur(){
    this._router.navigateByUrl('/toSurvey');
    console.log("to create survey PAGE!!");
  }
  results(){
    this._router.navigateByUrl('/toResult');
  }
}
