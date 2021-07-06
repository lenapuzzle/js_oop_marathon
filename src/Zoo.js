import Cage from "./Cage.js"

class Zoo {
    constructor(name) {
        this.name = name
            // this.cages = []
            // for (let i = 0; i < 10; i++) {
            //     this.cages.push(new Cage())
            // }
        this.cages = this.createCages()
        this.employees = []
    }

    addEmployee(newEmployee) {
        this.employees.push(newEmployee)
    }

    addAnimal(newAnimal) {
        for (let i = 0; i < this.cages.length; i++) {
            if (this.cages[i].isEmpty()) {
                this.cages[i].animal = (newAnimal)
                return
            }
        }
        return 'All of the cages are full!'
    }

    createCages() {
        let cages = []
        for (let i = 0; i < 10; i++) {
            cages.push(new Cage())
        }
        return cages
    }

    visit() {
        let output = ''
            // iterate over the animals
            // add animal.speak() to the string
            // iterate over the employees
            // add employee.___ to the string
        this.cages.forEach((cage) => {
            if (!cage.isEmpty()) {
                output += `${cage.animal.speak()}\n`
            }
        })

        this.employees.forEach((employee) => {
            output += `${employee.greet()}\n`
        })

        return output
    }
}

export default Zoo