let person = {
  name: "Pietro",
  age: 12,
};

function presentati(name, age) {
  console.log("piacere sono: ", name, " e ho; ", age, " anni");
}

let employee = {
  minimum_salary: 30_000,
  overtime: 10,
  rate: 20,

  getWage: function () {
    return this.minimum_salary + this.overtime * this.rate;
  },
};

function Employee(minimum_salary, overtime, rate) {
  (this.minimum_salary = minimum_salary),
    (this.overtime = overtime),
    (this.rate = rate),
    (this.getWage = function () {
      return this.minimum_salary + this.overtime * this.rate;
    });
}

function createEmploye(minimum_salary, overtime, rate) {
  return {
    minimum_salary,
    overtime,
    rate,
    getWage: function () {
      return this.minimum_salary + this.overtime * this.rate;
    },
  };
}

console.log(employee.getWage());
const father = createEmploye(30_000, 20, 20);
console.log(father.getWage());
babyEmploye = new Employee(25_000, 30, 30);
console.log(babyEmploye.getWage());
