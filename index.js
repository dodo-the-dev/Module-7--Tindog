// Remember to import the data and Dog class!
import Dog  from "./Dog.js";
import dogsData from "./data.js";

let dogArray = ["Rex", "Bella", "Teddy",]

function getNewDog(){
  const nextDogData = dogsData.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

function render(){
  document.getElementById("profile-section").innerHTML = dog.getDogHtml()
}
let dog = getNewDog()

render() 

// console.log(dog)