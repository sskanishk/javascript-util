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
