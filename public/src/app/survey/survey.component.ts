import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { Survey } from '../survey';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  user
  anw = { author: '', author1: '', author2: '', author3: '', author4: '', rate: Number }
  exists = false;
  survey = new Survey();
  datetime = new Date();
  holdUser = this.user;
  constructor(private _userService: UserService, private _router: Router) { }
  success = false;
  ngOnInit() {
    this.currentU();
  }

  currentU(){
    this._userService.grabU().then(user => this.user = user).catch(err => console.log(err));
  }

  createSurvey(survey){
    this._userService.sendApt(this.survey).then(response => {this._router.navigateByUrl('/toDashboard');}).catch(err => console.log(err));
    this.survey = new Survey();
    // this.anw ={ author: '', author1: '', author2: '', author3: '', author4: '', rate: Number }
    // console.log(this.anw)
    // this.survey.content = this.survey.content;
    // this.survey.author1 = this.anw.author1;
    // this.survey.author2 = this.anw.author2;
    // this.survey.author3 = this.anw.author3;
    // this.survey.author4 = this.anw.author4;
    // this.success = true;
    // this.survey = new Survey();
    // this.anw = {content: '', author1: '', author2: '', author3: '', author4: '' }
    console.log(this.survey)
  }

  dash(){
    this._router.navigateByUrl('/toDashboard');
  }
}
