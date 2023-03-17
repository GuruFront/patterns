class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    reposibilities() {
    }

    work() {
        return `${this.name} run ${this.reposibilities()}`
    }

    getPaid() {
        return `${this.name} has salary ${this.salary}$`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    reposibilities() {
        return 'developing web apps'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    reposibilities() {
        return 'testing'
    }
}

const dev = new Developer('Ruslan', 20000)
const tester = new Tester('Vlad', 20000)
console.log(dev.getPaid())
console.log(dev.work())

console.log(tester.getPaid())
console.log(tester.work())
