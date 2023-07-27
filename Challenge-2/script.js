// script.js

function add  (a, b) {
    return a + b;
}

function multiply  (a, b) {
    return a * b }

function internal() {
	const added = this.add(this.a, this.b);
	const multiply = this.multiply (this.a, this.b);
	return this;
    console.log(added, multiply)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()