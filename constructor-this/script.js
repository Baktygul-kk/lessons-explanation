// console.log(this);

// // function myFunction() {
// //     console.log(this);
// //   }

//   // Вызовем функцию
//   //myFunction(); 


//   var dog = {
//     name: 'Chester',
//     breed: 'beagle',
//     intro: function(){
//       console.log(this);
//     }
//   };

//   dog.intro();

//   var obj1 = {
//     hello: function() {
//       console.log('Hello world');
//       return this;
//     },
//     obj2: {
//         breed: 'dog',
//         speak: function(){
//               console.log('woof!');
//               return this;
//           }
//       }
//   };

//   console.log(obj1);
//   console.log(obj1.hello());  // выводит 'Hello world' и возвращает obj1
//   console.log(obj1.obj2);
//   console.log(obj1.obj2.speak());  // выводит 'woof!' и возвращает obj2


// const user = {
//     name: "John",
//     age: 18,
//     sayName: function () {
//         console.log(this.name);
//     }
// };

// //console.log(user.name);
// //user.sayName();




// function Person(name, birthday) {
//     this.name = name;
//     this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;

// }

// const john = new Person("John", "2016, 1, 28");
// const mary = new Person("Maria", "2010, 1, 08");

// console.log(john);
// console.log(john.calculateAge());
// console.log(mary.calculateAge());



// const str = new String("hello");
// console.log(str.toLocaleUpperCase());

// String.prototype.rerr = function () {
//     console.log("jjj");
// };
// console.log(str.rerr());


function Auto(marka, year, color, oil) {
    this.marka = marka;
    this.year = year;
    this.color = color;
    this.oil = oil;
}

Auto.prototype.showInfo = function () {
    console.log(this.marka, this.year);
}

Auto.prototype.drive = function () {
    if (this.oil > 0) {
       this.oil-=10;
       console.log("ostatok " + this.oil);
    } else {
        console.log("no oil");
        
    }
}

const mazda = new Auto("mazda", "2010", "red", 20);

console.log(mazda);
console.log(mazda.showInfo());
console.log(mazda.drive());
console.log(mazda.showInfo());
console.log(mazda.drive());