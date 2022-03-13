class User {
   constructor(email, name) {
     this.email = email;
     this.name = name;
     this.score = 0;
   }
   login(){
     console.log(`${this.email} is logged in`)
     return this
   }
   logout(){
     console.log(`${this.email} is logged out`)
     return this
   }
   updateScore(){
     this.score++;
     console.log(`${this.email} score is ${this.score}`)
     return this
   }
}

const aa = new User('ram@gmail.com', 'ram')
aa.login().updateScore().updateScore().updateScore().logout()



// -------------------------------------------




function User(email, name) {
  this.email = email;
  this.name = name;
  this.score = 0;
  this.online = false;
  this.login = () => {
    console.log(`${this.email} is logged in`);
    return this;
  };
  this.logout = () => {
    console.log(`${this.email} is logged out`);
    return this;
  };
}

const aa = new User('ram@gmail', 'ram');
const bb = new User('sam@gmail', 'sam');

aa.login();




// ---------------------------------




function User(email, name) {
  this.email = email;
  this.name = name;
  this.score = 0;
  this.online = false;
}

User.prototype.login = () => {
   this.online = true;
   console.log(`${this.email} is logged in`);
}

User.prototype.logout = () => {
   this.online = false;
   console.log(`${this.email} is logged out`);
}

const aa = new User('ram@gmail', 'ram');
const bb = new User('sam@gmail', 'sam');

aa.login();
aa.logout();
