// Your coworker is supposed to work with this code that you wrote on the first day of LIA, back when you were a noob.
// Coworker knows you know better now, and they want you to make the code more readable.

class UZI {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    g() {
        console.log(`Hi ${this.a}! You are ${this.b} years old :)`)
    }
}

function cnu({ n, e, a }) {
    return new UZI(
        n + ' ' + e,
        a
    )
}

const x = { n: 'Kim', e: 'Boman', a: '33' }
const y = cnu(x)
y.g()

// What is the purpose of this code? (Try running it!)
// What does it do?

// Can we express the purpose of this code only by changing names of variables and functions?
// Warning! Dont change the algorithims, leave the logic as is, change only the semantics and see if it is clearer.