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

class Admin extends User {
  deleteUser(user) {
    userList = userList.filter((u) => {
      return u.email !== user.email
    })
  }
}

const aa = new User('ram@gmail', 'ram')
const bb = new User('sam@gmail', 'sam')
const ad = new Admin('sita@gmail', 'sita')
let userList = [aa, bb, ad] 
ad.deleteUser(bb)
console.log(userList)







// -------------------------------------








function User(email, name) {
  this.email = email;
  this.name = name;
  this.score = 0;
  this.online = false;
}

User.prototype.login = function() {
   this.online = true;
   console.log(`${this.email} is logged in`);
}

User.prototype.logout = function() {
   this.online = false;
   console.log(`${this.email} is logged out`);
}

function Admin(...args) {
   User.apply(this, args)
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    userList = userList.filter((u) => {
      return u.email !== user.email
    })
  }

const aa = new User('ram@gmail', 'ram');
const bb = new User('sam@gmail', 'sam');
const ad = new Admin('sita@gmail', 'sita');

console.log(ad)

let userList = [aa, bb, ad]

ad.deleteUser(bb)

aa.login();
aa.logout();

cosnole.log(userList)
