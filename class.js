/*
Class---------
it is a template for javascript objects

class classname{
    constr,methods
}

*/

class user{

     constructor(firstname,lastname,money){
         this.firstname = firstname;
         this.lastname = lastname;
         this.money = money;
     }

    constructor(name){
        this.name = name;
    }

    // toGreet(){
    //     alert(this.name);
    // }
}
const person = new user("hari","kumar",21)
console.log(person);


// const person2 = new user("ravi")
// user.toGreet();




















