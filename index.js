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

document.addEventListener("click", function(e){
  if (e.target.id === "reject-btn"){
    handleRejectClick()
  } else if (e.target.id === "like-btn"){
    handleLikeClick()
  }
})

function handleRejectClick(){
  document.getElementById("reject").toggleAttribute("hidden")
  return setTimeout(()=>{
    dog.hasBeenSwiped = !dog.hasBeenSwiped
    dog = getNewDog()
    render()
  }, 1500)
}

function handleLikeClick(){
  document.getElementById("like").toggleAttribute("hidden")
  return setTimeout(()=>{
    dog.hasBeenSwiped = !dog.hasBeenSwiped
    dog.hasBeenLiked = !dog.hasBeenLiked
    dog = getNewDog()
    render()
  }, 1500)
}

render() 

// console.log(dog)