import { Component } from '@angular/core';
import {User} from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ="Angular is awesome";
  user:User;
  isEditMode:Boolean = false;

  constructor(){
    this.user = new User();
    this.user.age=17;
    this.user.name="Sarwo";
    this.user.weight=90;
    this.user.height=200;

  }
  

  onCheckAge(){
    if(this.user.isOld) {
      alert("the user is already dead!!")
    } else {
      alert("have fun!!!")
    }
  }

  onCheckBMI(){
   alert(this.user.getBMI())  
  }

  isHealthy(){
   alert(this.user.getHealthy())  
  }
}
