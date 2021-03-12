 let obj1 = {
     name  : "ram",
     city  : "kamareddy",
     getInfo:function(){
         console.log(this.name + " from " +this.city)
     }
 }


 let obj2 ={
     name : "laxman"
 }


 obj2.__proto__ = obj1;


// let arr = ["ram","shyam"];

/*
prototypes_______
whenever u create a object j.s engine automatically puts the hidden properties into that object and attaches to ur
object
*/



