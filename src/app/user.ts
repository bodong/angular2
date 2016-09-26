export class User{
    name:string;
    age:number;
    weight:number;
    height:number; 
    password:string;   


    constructor(name:string, age:number, weight:number, height:number, password:string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.password = password;
    }

    isOld():boolean{
    if(this.age >= 100) {
      return true;
    } else {
      return false;
     }
    }

    getBMI():number {
       return this.weight/(this.height * this.height);
    }

    getHealthy():boolean{
        console.log("BMI :" + this.getBMI());
        if(this.getBMI() >= 18.5 && this.getBMI() <= 24.9){
            
            return true;
        } else {
            return false;
        }
    }
}