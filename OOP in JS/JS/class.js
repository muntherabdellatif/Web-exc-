class   User {
    static counter = 0;
    constructor(name , email) {
        this.name = name ;
        this.email=email ;
        User.counter++;
    }
    // getters 
    get getName () {
        return this.name;
    }
    get getEmail () {
        return this.email;
    }
    // setters 
    set setName (newName) {
        this.name =newName;
    }
    set setEmail (newEmail) {
        this.email =newEmail;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    showEmail() {
        return `Your email is : ${this.email}`;
    }
    static countObject () {
        return(`${User.counter} object created`);
        // or 
        // return(`${this.counter} object created`);
    }
    writeMsg (){
        return `masseage from perant class`;
    }
}
// Class Inheritance
class  Admin extends User {
    constructor (name , email) {
        super(name,email); // to inherite the data from main class constructor
    }
    adminMsg() {
        return `you are admin`;
    }
    writeMsg (){ // override method
        return `masseage from child class`;
    }
}
let user1 = new User ("Monther","monthersaleh366@gmail.com");
console.log(user1);
console.log(user1.name);
console.log(user1.showEmail());
// Class Static Properties And Methods
let user2 = new User("osama" , "osama253@MediaList.com");
console.log ( User.countObject());
let user3 = new User("Sami" , "Sami53@MediaList.com");
console.log ( User.countObject());
console.log ( User.counter);
// Class Inheritance
let admin1 = new Admin ("osama", "os@gmail.com");
console.log(admin1);
console.log(admin1.showEmail());
console.log(admin1.adminMsg());
console.log(admin1.writeMsg());
// getters and setters
user1.setName = "Saleh"; // use the setters without () like averiables
user1.setEmail = "Saleh@gmail.com"; // use the setters without () like averiables
console.log(user1.getName); // use the getter without () 
console.log(user1.getEmail); // use the getter without () 
