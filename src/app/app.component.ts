import { Component } from '@angular/core';
import {User} from './user'

const USERS = [
  new User("Alysa", 20, 60, 170,"secret"),
  new User("Dea", 120, 70, 160, "secret2"),
  new User("Megan Fox", 20, 50, 175, "secret3")
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ="Angular is awesome";
  selectedUser:User;
  users:Array<User>;
  isEditMode:Boolean = false;

  constructor(){
    this.selectedUser = USERS[2];
    this.users = USERS;
  }
  

  onCheckAge(){
    if(this.selectedUser.isOld) {
      alert("the user is already dead!!")
    } else {
      alert("have fun!!!")
    }
  }

  getUsers() {
    return this.users;
  }

  onCheckBMI(){
   alert(this.selectedUser.getBMI())  
  }

  isHealthy(){
   alert(this.selectedUser.getHealthy())  
  }

  deleteUser(index) {
    this.users.splice(index,1)
  }

  addUser(){
    let tempUser:any = {};
    tempUser.name = prompt("name");
    tempUser.age=Number(prompt("age"));
    tempUser.weight=Number(prompt("weight"));
    tempUser.height=Number(prompt("height"));
    tempUser.password=prompt("password");
    this.users.push(new User(tempUser.name,
    tempUser.age, tempUser.weight, tempUser.height, tempUser.password))

  }
}
