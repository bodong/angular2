export class User{
    name:string;
    age:number;
    weight:number;
    height:number;    

    isOld():boolean{
    if(this.age >= 100) {
      return true;
    } else {
      return false;
     }
    }
}