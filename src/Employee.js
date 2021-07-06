class Employee {
    constructor(firstName, lastName, title) {
        this.firstName = firstName
        this.lastName = lastName
        this.title = title || 'Zookeeper'
    }

    fullTitle() {
        return `${this.firstName} ${this.lastName}, ${this.title}`
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    greet() {
        return `${this.getFullName()} waved hello!`
    }
}

export default Employee