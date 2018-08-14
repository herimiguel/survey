import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Survey } from '../survey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  survey: Survey;
  num1 = 0;
  num2 = 0;
  num3 = 0;
  num4 = 0;
  rate;
  @Input() surveys;
  user= {};
  
  // rate;
  constructor(private _userService: UserService, private _router: Router) { }
  
  ngOnInit() {
    
  this.currentU()
  this.grabApts();
  }
  currentU(){
    this._userService.grabU().then(user => this.user = user).catch(err => console.log(err));
  }
  grabApts(){
    this._userService.retrieveApt().then(anw => this.surveys = anw).catch(err => console.log(err));
  }

  voteUp(survey){
    survey.rate++;
  }

  dash(){
    this._router.navigateByUrl('/toDashboard');
  }

}
