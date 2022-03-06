
//employee constructor 
class Employee {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github; 

    }

    //return name
    getName () {
        return this.name;
    }

    //return ID
    getId () {
        return this.id;
    }   

    //return email
    getEmail () {
        return this.email;
    }

    //returning employee 
    getRole () {
        return 'Employee'; 
    }
};

//export
module.exports = Employee; 