console.log("Working");


function Student(name,birth) {
    this.nmae = name,
    this.birth = birth
}
let Student1 = new Student("Riya",2001);
console.log(Student1);
let Student2 = new Student("Harry",1999);
console.log(Student2);

let john = {
    fnmae : "John",
    lname : "Peter",
    bYear : 1990,
}
console.log(john);
delete john.bYear;
console.log(john);

