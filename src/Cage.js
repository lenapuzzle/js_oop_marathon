class Cage {
    constructor() {
        this.animal = null
    }

    isEmpty() {
        if (this.animal) {
            return false
        } else {
            return true
        }
    }
}

export default Cage