var names=['ryu', 'crystal', 'mario'];
console.log(names);

// sort in alphabetical order
names.sort();
console.log(names);

// Create user one
var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    friends: ['Yoshi'],
    login() {
        console.log(this.email, 'has logged in');

    },

    logout() {
        console.log(this.email, 'has logged out');

    }

};

// add age on the fly.
userOne.age = 24;

console.log(userOne);
console.log(userOne.name);
console.log(userOne['email']);

// Create multiple instances of an oject using classes in ES6
class User {
    constructor(email, name) {
        this.email= email;
        this.name = name;
        this.score = 0;

    }

    login() {
        console.log(console.log(this.email, 'just logged in'));
        return this;

    }

    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;

    }
    
}

// Create an object off the User class
var userTwo = new User('ryu@ninjas.com','Ryu');
var userThree =  new User('yoshi@marioCorp.com', 'Yoshi');
console.log(userTwo);
console.log(userThree);
userTwo.login();
userThree.logout();

// Methos chaining
userThree.login().updateScore().updateScore().logout();


var userTwo = new User();
// Create user two
var userTwoEmail = 'yoshi@mariocorp.com';
var userTwoName = 'Yoshi';
var userTwoFriends = ['Ryu', 'Mario'];

// Create user three
var userThreeEmail = 'mario@mario.com';
var userThreeName = 'Mario';
var userThreeFriends = ['Yoshi'];



