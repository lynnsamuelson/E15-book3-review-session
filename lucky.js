const student = {
  firstName: "Gavin",
  lastName: "Tally",
  friends: ["Henry", "Creed", "Mason", "Francis", "Kaiden", "Oscar", "Nassir"],
  school: {
    name: "Sylvan Park",
    principal: "Trey Stephens",
    location: "Bellevue",
    rating: 8
  }
}

//$ and {} embeded expressions
// ${} Template literals
// console.log(`The student is ${student.firstName} ${student.lastName}`)
// console.log(`The student goes to ${student.school.name}.`)

const listStudent = (first, last, school) => {
  const string = `${first} ${last} goes to ${school}`
  // console.log("I'm in the function")
  // return "monkey"
  return string
}

// const studentString = listStudent("Duley", "Willians", "NSS")
// const studentString = listStudent(student.firstName, student.lastName, student.school.name)
// console.log(studentString)

// const addTen = (num1, num2) => {
//   console.log(num2)
//   const sum = num1 + num2 + 10
//   return sum
// }

// const twentyThree = addTen(1, 12)
// const twentyFour = addTen(2, 12)
// const test = addTen(4)
// const overLoaded = addTen(4, 23, 15)

const mySunday = {}
const iceCreamSunday = (flavor, toppings, fruit) => {
  mySunday.flavor = flavor
  mySunday.toppings = toppings
  mySunday.fruit = fruit
}

iceCreamSunday("Praline", "caramel", "cherry")
// console.log(mySunday)
iceCreamSunday("Chocolate", "fudge", "strawberries")
// console.log(mySunday)
const winLottery = (person) => {
  if(person.lucky){
    return true
  } else {
    return false
  }
}
const luckyPerson = (person) => {
  person.lucky = true
}
const unluckyPerson = (person) => {
  person.lucky = false
}
const sydney = {
  name: "Sydney",
  lucky: false
}
// console.log(`Is ${sydney.name} lucky? ${sydney.lucky}`)
luckyPerson(sydney)
console.log(`Is ${sydney.name} lucky? ${sydney.lucky}`)
unluckyPerson(sydney)
sydney.winLottery = winLottery(sydney)
//sydney.winLottery = true
console.log(sydney)