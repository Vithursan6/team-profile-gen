//import Employee constructor 
const Employee = require('./Employee');

//intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //call employee
        super (name, id, email, school); 

        this.school = school; 
    }

    //return school from input 
    getSchool () {
        return this.school;
    }

    //override employee role to intern
    getRole () {
        return "Intern";
    }
}

//export Intern
module.exports = Intern; 