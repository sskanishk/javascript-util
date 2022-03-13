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

