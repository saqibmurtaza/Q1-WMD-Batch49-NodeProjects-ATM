#! /usr/bin/env node
import inquirer from "inquirer";
class User {
    constructor(name, username, pin, balance) {
        this.name = name;
        this.username = username;
        this.pin = pin;
        this.balance = balance;
    }
}
class ATM {
    constructor() {
        this.users = [];
        this.users.push(new User('Saqib Murtaza', 'saqibmurtaza', 1234, 50000));
        this.users.push(new User('Jawad', 'jawadkhaliq', 1111, 100000));
        let newUser = this.generateNames();
        let newUserName = this.generateUserName(5);
        let newUserPin = Math.floor(1000 + Math.random() * 9000);
        let balance = Math.floor(Math.random() * 1000000);
        this.users.push(new User(newUser, newUserName, newUserPin, balance));
        console.log('\n*****Computer Generated Data*****\n');
        console.log(newUser);
        console.log(newUserName);
        console.log(newUserPin);
        console.log(newUser);
        console.log('\n*****Computer Generated Data*****\n');
    }
    generateNames() {
        const firstName = ['Saqib', 'Murtaza', 'Ali', 'Jawad', 'Mubashir'];
        const lastName = ['Mutahar', 'Farhan', 'Wahid', 'Noman', 'Ahmad'];
        const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
        const randomLastName = lastName[Math.floor(Math.random() * firstName.length)];
        return randomFirstName + ' ' + randomLastName;
    }
    generateUserName(length) {
        const char = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let username = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * char.length);
            username += char[randomIndex];
        }
        return username;
    }
}
let atm = new ATM();
async function main() {
    let question = [{
            type: 'input',
            name: 'username',
            message: 'Enter username : '
        },
        {
            type: 'input',
            name: 'pin',
            message: 'Enter your 4-digit Pin : '
        }
    ];
    let answers = await inquirer.prompt(question);
    let username = answers.username;
    let pin = parseInt(answers.pin);
    let flag = false;
    for (let d of atm.users) {
        for (let p of atm.users) {
            if (username === d.username && pin === d.pin) {
                console.log('Match');
                console.log(`Your Account Balance is ${d.balance}`);
                flag = true;
                break;
            }
        }
    }
    if (!flag) {
        console.log('Invalid username or pin');
    }
}
main();
``;
