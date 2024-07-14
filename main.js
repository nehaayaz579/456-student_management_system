import inquirer from "inquirer";
class Student {
    name;
    id;
    courses;
    balance;
    fees;
    constructor(name, id, courses, balance, fees) {
        this.name = name;
        this.id = id;
        this.courses = courses;
        this.balance = balance;
        this.fees = fees;
    }
    enroll(course) {
        this.courses.push(course);
    }
    payfees(amount) {
        this.balance = amount;
    }
}
class StudentManagementSystem {
    students;
    constructor() {
        this.students = [];
    }
    async addStudents() {
        const answer = await inquirer.prompt([
            {
                message: "Please Enter your name",
                type: "input",
                name: "name",
            }, {
                message: "Please select your course",
                type: "list",
                name: "courses",
                choices: [
                    "Html fees 800/=",
                    "CSS fees 500/=",
                    "javascript fees 1000/=",
                    "Typescript fees 1200/=",
                    "Nextjs fees 1500/="
                ]
            }, {
                message: "Enter your selected course fees",
                type: "number",
                name: "fees"
            }, {
                message: "please enter your amount",
                type: "number",
                name: "Amount"
            }
        ]);
        const id = Math.floor(Math.random() * 10000 + 1000);
        const courses = answer.courses.split(',').map((course) => course.trim());
        const fees = answer.Amount - answer.fees;
        const student = new Student(answer.name, id, courses, answer.Amount, fees);
        this.students.push(student);
        console.log(`Student added successfully!!!!!!!1`);
    }
    displayStudent() {
        console.log("List of Students");
        this.students.forEach((student, index) => {
            console.log(`Student : ${index + 1}`);
            console.log(`Name: ${student.name}`);
            console.log(`Id: ${student.id}`);
            console.log(`Courses: ${student.courses.join(',')}`);
            console.log(`Balance: ${student.balance}`);
            console.log(`Remaining Balance: ${student.fees}`);
        });
    }
}
async function main() {
    const studentManagementSystem = new StudentManagementSystem();
    while (true) {
        const { choice } = await inquirer.prompt({
            message: "please select an action",
            type: "list",
            name: "choice",
            choices: ["Add Student", "Display Student", "Exit"]
        });
        switch (choice) {
            case "Add Student":
                await studentManagementSystem.addStudents();
                break;
            case "Display Student":
                await studentManagementSystem.displayStudent();
                break;
            case "Exit":
                console.log("Exiting......");
                break;
            default:
                console.log('invalid choice');
        }
    }
}
main();
