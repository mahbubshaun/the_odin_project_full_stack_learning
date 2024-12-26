
//   let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
  
//   // set fullName is executed with the given value.
//   user.fullName = "Alice Cooper";
  
//   console.log(user.name); // Alice
//   console.log(user.surname); // Cooper

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
  
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
  
//   console.log(user.fullName); // John Smith
  
//   for(let key in user) console.log(key); // name, surname

// let user = {
//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     }
//   };
  
//   user.name = "Pete";
//   console.log(user.name); // Pete
  
//   user.name = ""; // Name is too short...

//   function User(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   let john = new User("John", 25);
  
//   console.log( john.age ); // 25

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;
  
//     // age is calculated from the current date and birthday
//     Object.defineProperty(this, "age", {
//       get() {
//         let todayYear = new Date().getFullYear();
//         return todayYear - this.birthday.getFullYear();
//       }
//     });
//   }
  
//   let john = new User("John", new Date(1992, 6, 1));
  
//  console.log( john.birthday ); // birthday is available
//  console.log( john.age );      // ...as well as the age

//  class User {

//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHi() {
//       console.log(this.name);
//     }
  
//   }
  
//   // Usage:
//   let user = new User("John");
//   user.sayHi();

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
//   let user = new User("John");
//   console.log(user.name); // John
  
//   user = new User(""); // Name is too short.

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
